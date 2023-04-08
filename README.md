## Storing certain book data
## User Register
## Subscriber

This is a Book Record Management API Server/ Backend for Library System or management of records or manuals or books

Fine Systems:
User : 06/03/23 (for 3 months)==> 6/3/23 to 6/6/23 
07/06/23 => FINE-->50/-
09/06/23 => FINE-->50 *3 =150/-

Subscriptions:
3months (Basic)
6months (Standard)
12months (Premium)

If the subscription type is standard && if subscription date is 6/3/23 (6/3/23 to 6/9/23)

within subscription date if we miss the renewal >> 50/- day
if subscription date and renewal is missed >> 100 + 50/- day

<!--
>> book1
>> basic subscription type (3 months )
>> 06/03/23 -> subscription date
>> 07/03/23 -> borrowed a book from library
>> book1 renewal date is on 21/3/23
>>23/3/23 => we need to pay a fine of 50 *2 = 100/-

>> book2
>> basic subscription type
>> 06/03/23 -> subscription date
>> 07/03/23 -> borrowed a book from library
>> book2 renewal date is on 21/3/23
>>23/6/23 => we need to pay a fine of 100+(50 * no.of.days)/-
-->

missed by renewal date >> 50/-
missed by subscription date >> 100/-
missed by renewal and subscription date >> 150/-

# Routes and Endpoints

## /users
User Registeration--- POST : CREATE A NEW USER
Fetching User Info--- GET : GETTING ALL THE USER INFORMATION HERE

## /users/{id}
GET : GET THE USER BY ID
PUT : UPDATE AN USER BY THEIR ID
DELETE : DELETE AN USER BY ID (check if he/she still have an issued book) && (check if is there any fine to be paid)

## /users/subscription-details/{id}
GET : GET USER SUBSCRIPTION
          >> DATE OF SUBSCRIPTION
          >> VALID TILL
          >> IS THERE ANY FINE 

## /books
GET : GET ALL THE BOOKS
POST : ADD A NEW BOOK

## /books/{id}
GET : GET A BOOK BY ID
PUT : UPDATE A BOOK BY ID

## /books/issued
GET : GET ALL ISSUED BOOKS

## /books/issued/withFine
GET : GET ALL ISSUED BOOKS WITH THEIR FINE



## npm init
## npm i nodemon   --save-dev
## npm run dev

