from django.http.response import Http404
from .models import Post

from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    latest_blog_posts = Post.objects.order_by('-posted_at')[:5]
    return render(request, 'blog/index.html', {'latest_blog_posts': latest_blog_posts})

def detail(request, post_id):
    try:
        post = Post.objects.get(pk=post_id)
        post.views += 1

        # Making sure that only 'views' field is updating, 
        # otherwise post edit date will be changing everytime post is viewd.
        post.save(update_fields=['views'])
        
    except Post.DoesNotExist:
        raise Http404("Post with given ID does not exist")
    
    return render(request, 'blog/detail.html', {'post': post})