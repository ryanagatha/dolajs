from django.shortcuts import render

# Create your views here.


from django.http import FileResponse


def index(response):
    image_data = open('/Users/user/PycharmProjects/dola-app/dola/dola.png', 'rb')
    response = Fileresponse (image_data)
    return response


