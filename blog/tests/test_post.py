import datetime
import pytest
from django.test import Client

from ..models import Post


@pytest.mark.django_db
def test_default_user_is_root():
    post = Post(title="Test", text="Testing")
    post.save()

    assert post.id
    assert post.title == "Test"

    assert post.posted_by == "root"

@pytest.mark.django_db
def test_default_edited_time_is_set():
    post = Post(title="Test", text="Testing")
    post.save()

    assert post.id
    assert post.edited_at is not None
    assert post.edited_at.date() == datetime.datetime.now().date()

@pytest.mark.django_db
def test_default_posted_time_is_set():
    post = Post(title="Test", text="Testing")
    post.save()

    assert post.id
    assert post.posted_at is not None
    assert post.posted_at.date() == datetime.datetime.now().date()

@pytest.mark.django_db
def test_default_post_view_is_0():
    post = Post(title="Test", text="Testing")
    post.save()

    assert post.id
    assert post.views == 0

@pytest.mark.django_db
def test_default_post_view_increment_by_1():
    post = Post(title="Test", text="Testing")
    post.save()
    client = Client()
    client.get(f'/blog/{post.id}/')
    post_views = Post.objects.get(pk=post.id).views

    assert post_views == 1