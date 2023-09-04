# Book Listing
### Live Link: https://book-listing.vercel.app/

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/712ea23a-2c99-4736-bab8-7f13859b373e (Single GET) Include an id that is saved in your database
- api/v1/users/712ea23a-2c99-4736-bab8-7f13859b373e (PATCH)
- api/v1/users/712ea23a-2c99-4736-bab8-7f13859b373e (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

#### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/c9f75ba9-4444-495a-8539-def6055b8ad4 (Single GET) Include an id that is saved in your database
- api/v1/categories/c9f75ba9-4444-495a-8539-def6055b8ad4 (PATCH)
- api/v1/categories/c9f75ba9-4444-495a-8539-def6055b8ad4 (DELETE) Include an id that is saved in your database

#### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

#### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
