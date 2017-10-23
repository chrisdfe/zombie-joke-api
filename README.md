# zombie-joke-api
An API that responds with jokes about zombies

https://zombie-joke-api.herokuapp.com/

## Endpoints

`GET /random_zombie_joke`

url: https://zombie-joke-api.herokuapp.com/random_zombie_joke

Responds with a random zombie joke.  This is the only endpoint

### Example response
```
{
  "question": "What do you get when you cross a zombie with a snowman?",
  "answer": "FrostBITE!",
  "punchline": [
    "FrostBITE"
  ]
}
```

### Fields
- `question`: The question, or 'setup', of the joke.
- `answer`: The answer to the question.  The funny part of the joke - the part that contains the punchline.
- `punchline`: The specific part of the answer that makes it funny, as denoted by CAPITAL LETTERS.
