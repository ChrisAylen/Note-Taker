
    
# Team Profile Generator

![This command line applicaiton will generate some HTML to display a team structure that is defined using this applicaiton](https://img.shields.io/badge/license-MIT-blue.svg)
    
## Description
    
The application allows the user to add and delete notes.

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [API](#API)

* [Screenshot](#screenshots)

* [Deployed Version](#Deployment)

* [Questions](#questions)

## Installation
    
'npm i' to install the necessary dependencies.
    
## Usage

When the user adds a note, the note is added to the end of the list.

When the user deletes a note, the note is deleted from the list.

When the user selects a note, the note is displayed.

When the user presses the plus sign, an new note screen is displayed (if the user weas already viewing another note).

## API

    * GET /api/notes
    * GET /api/notes/:id
    * POST /api/notes
    * DELETE /api/notes/:id

### Get all Notes
```
curl --request GET \
  --url https://calm-headland-94675.herokuapp.com/api/notes/
```
### Get note by id
```
curl --request GET \
  --url https://calm-headland-94675.herokuapp.com/api/notes/[id]
```
### Add a note
```
curl --request POST \
  --url https://calm-headland-94675.herokuapp.com/api/notes/ \
  --header 'Content-Type: application/json' \
  --data '{
		"title": "Another amazing test",
		"text": "This test is quite amazing"
	}'
```
### Delete a note
```
curl --request DELETE \
  --url https://calm-headland-94675.herokuapp.com/api/notes/[id]
```


## Screenshots

![alt Landing Page](./public/assets/images/landing.PNG)
![alt Landing Page](./public/assets/images/notes.PNG)))

## Deployment

[Deployed Version](https://calm-headland-94675.herokuapp.com/)
   
## License
    
This project is licenced under MIT

## Questions

[More of my work can be found here](https://github.com/ChrisAylen)
    
