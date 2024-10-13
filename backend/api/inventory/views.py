from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from rest_framework import status
from rest_framework.viewsets import ModelViewSet

class ProductView(APIView):
    """
    商品操作に関する関数
    """

    def get(self, request, format=None):
        """
        商品の一覧を取得する
        """
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    
    # 商品を登録する
    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.data)
        # validationを通らなかった場合、例外を投げる
        serializer.is_valid(raise_exception=True)
        # 検証したデータを永続化する
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class ProductModelViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer