from django.shortcuts import render, redirect
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def index(request):
    return render(request, "index.html")


def view_404(request, exception=None):
    # redirect to homepage
    return redirect('/')