'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.group(() => {
    Route.get("/users", "UserController.get").middleware(["auth"]);
    Route.get("/users/:id", "UserController.index").middleware(["auth"]);
    Route.get("/users/:id/repositories", "UserController.repositories").middleware(["auth"]);
    Route.get("/users/:id/followers", "UserController.repositories").middleware(["auth"]);
    Route.post("/users", "UserController.create").middleware(["auth"]);
    Route.put("/users/:id", "UserController.update").middleware(["auth"]);
    Route.delete("/users/:id", "UserController.delete").middleware(["auth"]);
    Route.put("/users/:id/follow", "UserController.follow").middleware(["auth"]);
    Route.put("/users/:id/unfollow", "UserController.unfollow").middleware(["auth"]);

    Route.get("/repositories", "RepositoryController.get").middleware(["auth"]);
    Route.get("/repositories/:id", "RepositoryController.index").middleware(["auth"]);
    Route.post("/repositories", "RepositoryController.create").middleware(["auth"]);
    Route.put("/repositories/:id", "RepositoryController.update").middleware(["auth"]);
    Route.delete("/repositories/:id", "RepositoryController.delete").middleware(["auth"]);
    Route.put("/repositories/:id/star", "RepositoryController.star").middleware(["auth"]);
    Route.put("/repositories/:id/unstar", "RepositoryController.unstar").middleware(["auth"]);
})