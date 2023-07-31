**Info**
The API is hosted on : https://pollingapi-cpcg.onrender.com

**Disclaimer**
This API is completely open for anyone to use, there is no Authentication or Authorization required to use it.

**Adding a Question**
Use route: '/questions/create'
Make sure to give name="question", in input tag while adding a new question.

**View a Question**
Use route : '/questions/:id'
The route will give you the desired question and all the option attached to it, every option includes the link/endpoint which can be used for voting for that particular option.

**Deleting a Question**
Note: a question with even one option can not be deleted.
Use route: /questions/:id/delete

**Adding a option**
Make sure that you are able to include the correct id of question while adding a option:
Use route : '/questions/:id/options/create' 
Kindly add unique options and try avoiding adding the option again.

**Deleting a option**
Note: a option with even one vote can not be deleted.
Use route: /options/:id/delete

**Voting for a option**
Use route: '/options/:id/add_vote'
When you view a question, the options has a 'link_to_vote' attached which can be used to vote for that option. 





