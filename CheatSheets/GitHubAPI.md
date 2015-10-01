# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate? 

Yes,to prevent the accidental leakage of private repositories to unauthorized users.

> What can I do with an unauthenticated request?

You can pass your app’s client ID and secret as part of the query string.

> What _can't_ I do with an unauthenticated request?


> How can I authenticate my request?

1. First way -- with some description of what that is
```
// and perhaps some code example?
```
2. Second way -- and more descriptive text
```
// and another code example
```
3. Third way -- yep, include a short description
```
// with another code example
```

## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?

. . .
### What are the endpoints for fetching...
 * All API endpoints—except Management Console API endpoints—are prefixed with the following URL:
 `http(s)://hostname/api/v3/`
 * You can issue a GET request to the root endpoint to get all the endpoint categories that the API supports.
 * You’ll need to pass in your GitHub Enterprise endpoint as the hostname, as well as your username and password.

### the profile data for a user?
 *  name	
 *  email	
 *  blog	
 *  company	
 *  location	
 *  hireable
 *  bio	string	

the organizations a user belongs to?
* you can use the following command to fetch the oranizations a user belongs too:
`GET /users/:username/orgs`


the repositories a user has created?
* `GET /users/:username/repos` fetch's a users repository. Here is a small example of what the first part of 
one looks like:
```
[
  {
    "id": 1296269,
    "owner": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
```


a filtered list of repositories?
 * You can specify exactly what you want by being specifc and targetting ceartain things out of the repos.
 * `GET /repos/:owner/:repo/languages`
 * `GET /repos/:owner/:repo/teams`
 * `GET /repos/:owner/:repo/branches`

a sorted list of repositories?

public events for a user?

When fetching public events for a user...

How many results are returned by default?

What limitations exist on fetching more results?

What is the basic structure of the results?

What fields are included in each result?

What are the data types for each field?

What are some of the different values for the type field?


###How can I use the jQuery API to...

 * get the HTML contents of an element?  
  * In an HTML document, .html() can be used to get the contents of any element.
   `$( "selector" ).html();`

 * create a new HTML element?
   with the .add selctor you can create a new jQuery object with elements added to the set of matched elements.
   `.add(html)`
   
 * add an HTML element to the page?

###How can I use the Lodash API to...

###replace placeholders with values from an object?

###repeat code for every item of an array?
