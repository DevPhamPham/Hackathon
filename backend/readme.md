API:

## /auth:

- [POST] /auth/signup --- Đăng ký:    
    `{
        "fullname": "AhThu",
        "email": "anhthu@gmail.com",
        "password": "123456"
    }`
    - success [status 200]: 

    `{
        "code": 0,
        "message": "Đăng ký thành công"
    }`
    - fail [status 400]: 

    `{
        "code": 1,
        "message": "Email đã được sử dụng"
    }`
    - err [status 500]:

    `{
        "code": 1,
        "message": "Lỗi không thể đăng ký"
    }`

- [POST] /auth/login --- Đăng nhập:   
    `{
        "email": "anhthu@gmail.com",
        "password": "123456"
    }`
    - success [status 200]:

    `{
        "code": 0,
        "message": "Đăng nhập thành công"
    }`
    - fail [status 400]: 

    `{
        "code": 1,
        "message": "Đăng nhập không thành công"
    }`

- [GET] /auth/logout --- Đăng xuất:
    - success [status 200]: 

    `{
        "code": 1,
        "message": "Đăng xuất thành công"
    }`

- [GET] /auth/google --- Đăng nhập bằng google.

- [GET] /auth/facebook --- Đăng nhập bằng facebook.