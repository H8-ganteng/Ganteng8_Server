#API-DOC TEBAK-GAMBAR

##DATABASE TABLE

###Users
> username, NOT NULL, UNIQUE STRING </br>
> email, NOT NULL, UNIQUE STRING </br>
> points, NOT NULL, INTEGER => for user point (if correct answer) </br>
> password, NOT NULL STRING </br>


HARUS SEEDING
###Questions

> imageUrl NOT NULL, STRING => imgurl </br>
> answer NOT NULL, STRING </br>
> reward NOT NULL, INTEGER </br>


##List of available routes
> `GET` / => intro web</br>
> `POST` /login </br>
> `GET` /questions </br>

##ROUTE
###endpoints
> `GET` /questions

###REQUEST
