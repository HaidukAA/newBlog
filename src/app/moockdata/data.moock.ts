export const articles= [
  
    {
      id: 1,
      title: 'How To Add Confidence Intervals to Any Model',
      tegs: {
        tegOne: 'Data Sciense',
        tegTwo: 'Artificial Intelligence'
      },
      imageUser: 'assets/img/tyler.png',
      nameUser: 'TYLER FOLKMAN',
      dataArticle: 'November 29, 2019',
      kudos: 147,
      imageArticle: 'assets/img/Image.png',
      title2: 'Trust',
      caption: 'I would like to add another technique to your toolkit — confidence intervals.',
      captionImage: '“Can I trust your model?”',
      paragraph1: 'It is the first thing your manager asks as you present your latest work. How do you answer? Do you refer to the mean squared error? the R² coefficient? How about some example results? These are all great, but I would like to add another technique to your toolkit — confidence intervals.',
      paragraph2: 'At the end of the day, one of the most important jobs any data scientist has is to help people trust an algorithm that they most likely don’t completely understand.',
      paragraph3: 'One way to help build this trust is to add confidence intervals to your model\'s predictions. We will define confidence intervals for this article as a way of quantifying the uncertainty of an estimate. This tends to be easier for classification problems. Most algorithms provide probability estimates which can serve as confidence scores. For example, a 90% probability of being a cat should be more confident than a 50% probability.',
      paragraph4: 'For regression problems, though, things tend to get trickier. Most algorithms don’t have a natural way of providing a confidence or probability score. There are many solutions to this problem, one of my favorite being Bayesian models, but I would like to discuss the simplest and easiest method to implement for any machine learning model.',
    }, 

    {
      id: 2,
      title: 'What’s New in JavaScript — ES2019',
      tegs: {
        tegOne: 'Front End',
        tegTwo: 'JavaScript'
      },
      imageUser: 'assets/img/Rectangle2.png',
      nameUser: 'JOHN AU-YEUNG',
      kudos: 147,
      imageArticle: 'assets/img/Image2.png',
      caption: 'Every year there have been new features added to the JavaScript specification. Array.flatMap, try/catch improvements and more.',
    } ,

    {
      id: 3,
      title: 'How To Fake Being a Good Programmer',
      tegs: {
        tegOne: 'Productivity',
        tegTwo: 'Humor'
      },
      imageUser: 'assets/img/Rectangle3.png',
      nameUser: 'STEN SOOTLA',
      kudos: 147,
      imageArticle: 'assets/img/Image3.png',
      caption: 'Programmers are wizards— poor, ragged characters turning coffee into code. I don’t know magic, I‘m merely an illusionist.',
      
    }, 

    {
      id: 4,
      title: 'Here Are 11 Console Commands Every Developer Should Know',
      tegs: {
        tegOne: 'Terminal',
        tegTwo: 'Programming'
      },
      kudos: 147,
      imageArticle: 'assets/img/Image4.png',
      caption: 'Instead of clicking around in the Graphical User Interface (GUI), we can fire off a couple of commands and call it job done.',
    }, 

    {
      id: 5,
      title: 'How To Add Confidence Intervals to Any Model',
      tegs: {
        tegOne: 'Programming',
        tegTwo: 'Coding'
      },
      imageUser: 'assets/img/Rectangle4.png',
      nameUser: 'DEVIN SONI',
      dataArticle: 'November 29, 2019',
      kudos: 147,
      imageArticle: 'assets/img/Image5.png',
      caption: 'I would like to add another technique to your toolkit — confidence intervals.',
    }, 

    {
      id: 6,
      title: 'Reduce Memory Usage and Make Your Python Code Faster Using Generators',
      tegs: {
        tegOne: 'Data Sciense',
        tegTwo: 'Python'
      },
      imageUser: 'assets/img/Rectangle5.png',
      nameUser: 'BHINAV SAGAR',
      kudos: 147,
      imageArticle: 'assets/img/Image6.png',
      caption: 'When I started learning about python generators, I had no idea how important it would turn...',
 } 
 ]

 export const users = [
  {
    id: 1,
    name: 'Tyler Folkman',
    joined: '12 November 2019',
    gender: 'Male',
    status: 'Administrator',
    email: 'tayler.folkman@gmail.com',
  }
 ]

  
 export const populars = [ {
  id: 1,
  title: 'How To Add Confidence Intervals to Any Model',
  caption: 'I would like to add another technique to your toolkit — confidence intervals',
  kudos: 147,
  imageUser: 'assets/img/folkman.png',
  nameUser: 'TYLER FOLKMAN',
  imageArticle: 'assets/img/Image.png',
},
{
  id: 2,
  title: 'What’s New in JavaScript — ES2019',
  kudos: 120,
  imageUser: 'assets/img/folkman.png',
  nameUser: 'TYLER FOLKMAN',
  imageArticle: 'assets/img/ImageSmall2.png',
},
{
  id: 3,
  title: 'How To Fake Being a Good Programmer',
  kudos: 89,
  imageUser: 'assets/img/folkman.png',
  nameUser: 'TYLER FOLKMAN',
  imageArticle: 'assets/img/ImageSmall3.png',
},
{
  id: 4,
  title: 'Reduce Memory Usage and Make Your Python Code Faster Using Generators',
  kudos: 21,
  imageUser: 'assets/img/folkman.png',
  nameUser: 'TYLER FOLKMAN',
  imageArticle: 'assets/img/ImageSmall4.png',
},
{
  id: 5,
  title: 'Here Are 11 Console Commands Every Developer Should Know',
  kudos: 3,
  imageUser: 'assets/img/folkman.png',
  nameUser: 'TYLER FOLKMAN',
  imageArticle: 'assets/img/ImageSmall5.png',
}
]

export  const footherArticles = [ { 
  id: 1,
  title: 'Is React Overrated',
  kudos: 120,
  imageUser: 'assets/img/folkman.png',
  nameUser: 'Tyler Folkman',
  imageArticle: 'assets/img/React.png'
},
{ 
  id: 2,
  title: 'Your Next App May Not Have a Back End',
  kudos: 120,
  imageUser: 'assets/img/folkman.png',
  nameUser: 'Tyler Folkman',
  imageArticle: 'assets/img/NextApp.png'
},
{ 
  id: 3,
  title: 'JavaScript: Sets vs. Arrays',
  kudos: 120,
  imageUser: 'assets/img/folkman.png',
  nameUser: 'Tyler Folkman',
  imageArticle: 'assets/img/JSSets.png'
}
]



export const reactions = [ {
  id: 1,
  kudos: 120,
  imageUser: 'assets/img/folkman.png',
  nameUser : 'TYLOR FOLKMAN',
},
{
  id: 2,
  kudos: 150,
  imageUser: 'assets/img/folkman.png',
  nameUser : 'petya',
},
{
  id: 3,
  kudos: 20,
  imageUser: 'assets/img/folkman.png',
  nameUser : 'vasya',
},
]

export const newests= [
  
  {
    id: 1,
    title: 'Angular: Multiple Themes Without Killing Bundle Size (With Material or Not)',
    tegs: {
      tegOne: 'Angular',
      tegTwo: 'Material Design'
    },
    imageArticle: 'assets/img/newest.png',
    caption: 'Keep users happy with a choice of themes.',
    
  },
  {
    id: 2,
    title: 'Angular: Multiple Themes Without Killing Bundle Size (With Material or Not)',
    tegs: {
      tegOne: 'Angular',
      tegTwo: 'Material Design'
    },
    imageArticle: 'assets/img/newest.png',
    caption: 'Keep users happy with a choice of themes.',
    
  }]