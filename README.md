# CoderSchool FTW - * Name of Your Project Here *

Created with love by: `Edward Stevens`
  
View online at: `Your URL here`
  
This project was completed to practice implementing and then manipulating data from an API. 

## Video Walkthrough

Here's a walkthrough of implemented user stories.

https://i.imgur.com/mKbqSK5.gifv 
```

## User Stories

The following **required** functionalities are completed (this is a sample):

* [x] The user can see a list of the 20 latest top news stories, loaded dynamically from newsapi. 
* [x] For each story, the user sees a headline, the source, a link to more, and an image. 
* [x] The user can see the total number of stories currently shown.

The following **optional** features are implemented:
 
* [x] The user can click a link at the bottom of the page to load the next 20 stories. The page should not refresh; the stories should simply be added to the bottom. 
* [x] The user can see an updated number of stories currently shown. 
* [x] The user can see how long ago the story was published in a human-friendly format; e.g. "15 minutes ago". To accomplish this, we recommend you use momentjs. Please load it into your page using cdnjs or jsdelivr (these are called CDNs).
* [x] The user will see the date in Vietnamese if their settings are in Vietnamese.

The following **additional** features are implemented:

* [x] The user can see a checkbox for every unique source of the articles loaded. For example, if the user loads four stories, and two stories are from bbc-news, one from cnn, and one from spiegel-de, the user would see three checkboxes: bbc-news, cnn, spiegel-de. 
* [ ] Next to the source name, the user sees a number representing the number of stories from that source. To continue the previous example: bbc-news (2), cnn (1), spiegel-de (1). 
* [ ] The user can toggle the checkbox to hide or show stories from that source in the list.

## Time Spent and Lessons Learned

Time spent: 13 hours spent in total.

Describe any challenges encountered while building the app.

I found it hard to isolate the news sources from the API and display them on the left column. 
My fix was to create a new array named source but this didn't provide me with a count. 


## License

    Copyright [yyyy] [Edward Stevens]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.