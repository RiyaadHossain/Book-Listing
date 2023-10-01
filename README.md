# Book Listing 📚

### Live Link: https://book-listing-lh1p8xxuu-riyaadhossain.vercel.app/

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/d57ac032-f2e4-4a96-a21e-5e54b349fa64 (Single GET) Include an id that is saved in your database
- api/v1/users/d57ac032-f2e4-4a96-a21e-5e54b349fa64 (PATCH)
- api/v1/users/d57ac032-f2e4-4a96-a21e-5e54b349fa64 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

#### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/1582b5a6-93ed-4e90-beaa-5966e760e774 (Single GET) Include an id that is saved in your database
- api/v1/categories/1582b5a6-93ed-4e90-beaa-5966e760e774 (PATCH)
- api/v1/categories/1582b5a6-93ed-4e90-beaa-5966e760e774 (DELETE) Include an id that is saved in your database

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
