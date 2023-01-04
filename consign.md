# Exercices :

## bronze

Filter all user with a bronze subscription

## avatarId

For each user, keep only the "id" and the avatar Id, example :
For this avatar URL :
"https://robohash.org/utodioarchitecto.png?size=300x300\u0026set=set1"
the id is : utodioarchitecto.
result {
"id": 8733,
"avatarId": "eumsuscipitfuga"
}

## Parsed adress

Keep only the last and first name and the address with this format :
{
  "first_name": "Tom",
  "last_name": "Roob",
  "address": {
    "city": "New Adriannaside",
    "street_name": "Tonita Bypass",
    "street_address": "57313 Alec View",
    "zip_code": "15994-5410",
    "state": "Nevada",
    "country": "United States",
    "coordinates": { "lat": 15.409732365848399, "lng": 139.6971497497501 }
  }
}
Become : 
{
  "name": "Tom Roob",
  "address": "57313 Alec View 15994-5410 Nevada"
}

## Order age

Order the users from the older to the younger

## Count subscription 

Count how many Plan there is, for example if 6 people have the Diamond plan, 8 the standard, return
{
  "Diamon": 6,
  "Standard": 8
}
Do it for each plans