from django.contrib.auth.models import User

from rest_framework import viewsets, response, permissions, status

from .serializers import UserSerializer
from .serializers import PasswordSerializer
from rest_framework.views import APIView
from rest_framework.decorators import detail_route, list_route
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return response.Response(serializer.data)

    def retrieve(self, request, pk=None):
        if pk == 'i':
            return response.Response(UserSerializer(request.user,
                context={'request':request}).data)
        return super(UserViewSet, self).retrieve(request, pk)

    @detail_route(methods=['post'], serializer_class=PasswordSerializer, url_path='change-password')
    def set_password(self, request, pk=None):
        serializer = PasswordSerializer(data=request.data)

        user = User.objects.get(username=request.data['username'])

        if serializer.is_valid():
            # if not user.check_password(serializer.data.get('old_password')):
            #     return response.Response({'old_password': ['Wrong password.']},
            #                     status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            user.set_password(serializer.data.get('newpass'))
            user.save()
            return response.Response({'status': 'password set'}, status=status.HTTP_200_OK)

        return response.Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

