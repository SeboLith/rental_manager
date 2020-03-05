# Django React

This project integrates a Django backend with a React frontend


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

`Pipenv` automatically creates and manages a virtualenv for the project, as
well as adds/removes packages from the `Pipfile` as packages are
installed/uninstalled. It also generates the ever-important
`Pipfile.lock`, which is used to produce deterministic builds.

```
$ pip install pipenv
```

Activate the `Pipenv` shell. This will spawn a new shell subprocess, which can be deactivated by using `exit`.

```
$ pipenv shell
```

Install the package requirements in `Pipfile`.

```
$ pipenv install
```

Install the frontend dependencies
```
$ cd frontend && npm install
```

Build the frontend static files that will be served
```
$ npm run build
```
Ensure environmental variables are set.


### Virtual project environment specific dependencies

`Django` is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

`Django REST framework` is a powerful and flexible toolkit for building Web APIs.

`django-rest-knox` is an authentication Module for django rest auth.

`Pillow` is the friendly `PIL` fork by _`Alex Clark and Contributors`_. `PIL` is the Python Imaging Library by _`Fredrik Lundh and Contributors`_.


### Migrating database changes

```
$ cd .. && python manage.py makemigrations
```


### Applying migrations

```
$ python manage.py migrate
```


### Create a superuser

````
$ python manage.py createsuperuser
````


### Running the local server

````
$ python manage.py runserver
````


### Seeding users

Make a post request to: http://localhost:8000/auth/users/

With a user object following the below format:
```
$ curl --request POST \
  --url http://localhost:8000/auth/users/ \
  --header 'content-type: application/json' \
  --data '{
    "username": "someusername",
    "password": "somepassword",
    "first_name": "Elmer",
    "last_name": "Fudd",
    "email": "elmer.fudd@email.com"
  }'
```


### Retrieving users

Make a get request to: http://localhost:8000/auth/users/

```
$  curl --request GET --url http://localhost:8000/auth/users/
```
Returns a user list of users in the below format:
```
[
    {
        "id": 1,
        "password": "passwordhash",
        "last_login": "datetime",
        "is_superuser": false,
        "password": "somepassword",
        "username": "someusername",
        "first_name": "John",
        "last_name": "Doe",
        "email": "someone@email.com",
        "is_staff": false,
        "is_active": true,
        "date_joined": "datetime",
        "groups": [],
        "user_permissions": []
    },
    {
        "id": 2,
        "password": "passwordhash",
        "last_login": "datetime",
        "is_superuser": false,
        "password": "somepassword",
        "username": "someusername",
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "someone@email.com",
        "is_staff": false,
        "is_active": true,
        "date_joined": "datetime",
        "groups": [],
        "user_permissions": []
    }
]
```


### Retrieving a specific user

Make a get request to: http://localhost:8000/auth/users/1

```
$  curl --request GET --url http://localhost:8000/auth/users/1
```
Returns a user object in the below format:
```
{
    "id": 1,
    "password": "passwordhash",
    "last_login": "datetime",
    "is_superuser": false,
    "password": "somepassword",
    "username": "someusername",
    "first_name": "John",
    "last_name": "Doe",
    "email": "someone@email.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "datetime",
    "groups": [],
    "user_permissions": []
}
```


### Deleting a specific user

Make a delete request to: http://localhost:8000/auth/users/<user_id>/

```
$  curl --location --request DELETE 'http://localhost:8000/auth/users/2/'
```


## License

Copyright (C) Nescion Technologies, Inc - All Rights Reserved.
Unauthorized use of this codebase, via any medium is strictly prohibited.
Proprietary and confidential
Written by Reginald Mathieu <reginald.w.mathieu@gmail.com>, January 3rd, 2020