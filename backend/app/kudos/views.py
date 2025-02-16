from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, status, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action, api_view
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.utils.timezone import now
from .models import CustomUser, Kudo
from .serializers import CustomUserSerializer, KudoSerializer
from django.contrib.auth import get_user_model

# Create your views here.
def home(request):
    return HttpResponse("Test Kudos View!")

User = get_user_model()

# Get list of all users
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can access this

    def get_queryset(self):
        name = self.request.query_params.get('name', None)
        if(name):
            return User.objects.filter(username__icontains=name)
        return super().get_queryset()

class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = token.user
        return Response({'token': token.key, 'id': user.id, 'username': user.username, 'email': user.email, 'organization': user.organization, 'kudos_remaining': user.kudos_remaining })

@api_view(['POST'])
def logout_view(request):
    request.auth.delete()
    return Response({'message': 'Logout Successfull'})

class KudoViewSet(viewsets.ModelViewSet):
    queryset = Kudo.objects.all()
    serializer_class = KudoSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['post'])
    def give_kudo(self, request):
        sender = request.user
        recipient_id = request.data.get('recipient_id')
        message = request.data.get('message')

        if sender.kudos_remaining <= 0:
            return Response({'error': 'No Kudos Remaining'})
        
        try:
            reciever = CustomUser.objects.get(id=recipient_id)
        except CustomUser.DoesNotExist:
            return Response({"error": "Reciever not found"}, status=status.HTTP_404_NOT_FOUND)
        
        kudo = Kudo.objects.create(sender=sender, receiver=reciever, message=message)
        sender.kudos_remaining -= 1
        sender.save()

        return Response(KudoSerializer(kudo).data, status=status.HTTP_201_CREATED)
    
    
    @action(detail=False, methods=['get'])
    def my_kudos(self, request):
        user = request.user
        received_kudos = Kudo.objects.filter(receiver=user)
        return Response(KudoSerializer(received_kudos, many=True).data)



