import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds } from "react-native-google-mobile-ads";

const adUnitId = "ca-app-pub-1985971607756371/1745566869"; //TestIds.BANNER; //
const adUnitId2 = "ca-app-pub-1985971607756371/9139515735"; //TestIds.BANNER; //
const interstitalAdUnit = "ca-app-pub-1985971607756371/8687896072"; //TestIds.INTERSTITIAL; 

const interstitial = InterstitialAd.createForAdRequest(interstitalAdUnit);

const singleActivities = [
  "Organize the apps on your phone",
  "Take the Wonderlic test",
  "Do 20 jumping jacks",
  "Do 10 pushups",
  "Do 10 situps",
  "Play online poker",
  "Watch a stand-up comedy special",
  "Find an item to flip online",
  "Attempt to do a handstand",
  "Go to a thrift store",
  "Make a list of the top 10 movies you've been meaning to watch",
  "Watch a movie you've never seen",
  "Start a new show",
  "Binge a short series",
  "Read a book",
  "Do laundry",
  "Take out the trash",
  "Do the dishes",
  "Clean the bathroom",
  "Drink water",
  "Go for a run",
  "Go on a nature walk",
  "Listen to a new album",
  "Floss",
  "Host a tapas night",
  "Host a beer/wine tasting night",
  "Start a puzzle",
  "Order takeout",
  "Take a bubble bath",
  "Watch a Best Picture Oscar-winning film you've never seen",
  "Create a budget",
  "Stretch",
  "Meditate",
  "Make cookies",
  "Host a card game tournament",
  "Call a friend",
  "Memorize the US states and their capitals",
  "Memorize the US presidents",
  "Learn a magic trick",
  "Donate your old clothes",
  "Visit the closest museum",
  "Start a blog",
  "Go mini-golfing",
  "Go bowling",
  "Clean out the fridge",
  "Vacuum the house",
  "Play a video game",
  "Make an exotic meal",
  "Watch a documentary",
  "Do yoga",
  "Do an ab workout",
  "Write in a journal",
  "Organize your closet",
  "Make a recipe book",
  "Sit down at a coffee shop",
  "Go for a bike ride",
  "Listen to a podcast",
  "Watch a TED talk",
  "Create a weekly schedule",
  "Make some daily, weekly, monthly, and yearly goals",
  "Build a fort",
  "Make a smoothie",
  "Write a short story",
  "Go to an arcade",
  "Go to the gym",
  "Go to the movie theater",
  "Design your dream home",
  "Go swimming",
  "Go grocery shopping",
  "Take a day trip to a nearby city or attraction",
  "Research a stock to buy",
  "Watch a black and white movie",
  "Learn three new words",
  "Buy some herbs to grow on your own",
  "Go to the pet store and get a fish",
  "Buy a plant",
  "Walk someone else's dog",
  "Buy a lottery ticket",
]

const coupleActivies = [
  "Buy a lottery ticket - discuss what you would do if you won",
  "Walk someone else's dog",
  "Rock, Paper, Scissors - best of 7. Loser does the dishes!",
  "Go to a driving range",
  "Play a two-player video game",
  "Buy a bottle of wine",
  "Dress in formal attire and go to dinner",
  "Watch a black and white movie",
  "Go swimming",
  "Go grocery shopping",
  "Play 'What's in the Box?' with random household items",
  "Go to a thrift store",
  "Have an in-home photo shoot",
  "Watch a stand-up comedy special",
  "Tell each other a secret",
  "Design your dream home",
  "Handstand competition",
  "Go on a bar crawl",
  "Go to a brewery",
  "Build a fort",
  "Play a game of chess",
  "Watch a movie",
  "Start a new show",
  "Binge a short series",
  "Go for a run",
  "Go on a nature walk",
  "Listen to a new album",
  "Host a tapas night",
  "Host a beer/wine tasting night",
  "Start a puzzle",
  "Order takeout",
  "Make a smoothie",
  "Watch a Best Picture Oscar-winning film you've never seen",
  "Create a budget",
  "Stretch",
  "Meditate",
  "Make cookies",
  "Host a card game tournament",
  "Donate your old clothes",
  "Visit the closest museum",
  "Go mini-golfing",
  "Go bowling",
  "Make an exotic meal",
  "Watch a documentary",
  "Do yoga",
  "Do an ab workout",
  "Play your favorite board game",
  "Draw portraits of each other",
  "Have a picnic",
  "Plan a future trip",
  "Make homemade pizza",
  "Have a spa day at home",
  "Get a couples massage",
  "Have a home karaoke night",
  "Go to the movie theater",
  "Have a potluck dinner",
  "Have a trivia night",
  "Create an obstacle course",
  "Play beer pong",
  "Play tennis",
  "Play pickleball",
  "Take a day trip to a nearby city or attraction",
  "Give each other massages", 
  
]

const groupActivities = [
  "Buy lottery tickets for a group pool",
  "Go to a driving range",
  "Have a poker night",
  "Have a formal cocktail party",
  "Watch a black and white movie",
  "Play volleyball",
  "Have a pickleball tournament",
  "Have a tailgate",
  "Create an obstacle course",
  "Play beer pong",
  "Handstand competition",
  "Go on a bar crawl",
  "Go to the movie theater",
  "Go to an escape room",
  "Go to a brewery",
  "Go on a nature walk",
  "Watch a movie",
  "Binge a short series",
  "Have a tapas night",
  "Have a trivia night",
  "Attend trivia at a bar",
  "Play laser tag",
  "Play capture the flag",
  "Set up a mini-Olympics",
  "Organize a scavenger hunt",
  "Have a murder mystery party",
  "Create a group podcast",
  "Have a beer/wine tasting night",
  "Start a group puzzle",
  "Break into two teams and see who can complete a puzzle the quickest",
  "Order takeout",
  "Watch a Best Picture Oscar-winning film you've never seen",
  "Have a card game tournament",
  "Visit the closest museum",
  "Go mini-golfing",
  "Go bowling",
  "Watch a documentary",
  "Play your favorite board game",
  "Play charades",
  "Play pictionary",
  "Have a bonfire",
  "Take a day trip to a nearby city or attraction",
  "Go to a sporting event",
  "Go to a casino",
  "Go to a park and play a soccer game",
  "Go to a park and play a basketball game",
  "Brainstorm business ideas",
  "Have a Beers of the World night - each room should represent a different country",
  "Play BlackJack"
]

const MainScreen = ({route}) => {
  const [force, setForce] = useState(0);
  const [counter, setCounter] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [randomNumSingle, setRandomNumSingle] = useState(() => {
    const randNum = Math.floor(Math.random() * Math.floor(singleActivities.length));
    return randNum;
  });
  const [randomNumCouple, setRandomNumCouple] = useState(() => {
    const randNum = Math.floor(Math.random() * Math.floor(coupleActivies.length));
    return randNum;
  });
  const [randomNumGroup, setRandomNumGroup] = useState(() => {
    const randNum = Math.floor(Math.random() * Math.floor(groupActivities.length));
    return randNum;
  });

  const setting = route.params.setting;

  const loadInterstitial = () => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );
    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setLoaded(false);
        interstitial.load();
      },
    );
    // Start Loading the interstitial ad right away
    interstitial.load();
    //Clean up functions
    return () => {
      unsubscribeClosed();
      unsubscribeLoaded();
    }
  }

  useEffect(() => {
    const unsubscribeInterstitalEvents = loadInterstitial();

    return unsubscribeInterstitalEvents;
  }, []) 

  function useForceUpdate() {
    setCounter(counter + 1);
    if (counter >= 20) {
      //Display Ad
      if (loaded) {
        interstitial.show();
        setCounter(0);
      } 
    } 
    var length;
    if (setting == 'single') {
      length = singleActivities.length;
      setRandomNumSingle(Math.floor(Math.random() * length));
    }
    else if (setting == 'couple') {
      length = coupleActivies.length;
      setRandomNumCouple(Math.floor(Math.random() * length));
    }
    else {
      length = groupActivities.length;
      setRandomNumGroup(Math.floor(Math.random() * length));
    }
  }

  function getRandomActivity(setting) {
    var activityArray;
    var randomNum;
    if (setting == 'single') {
      activityArray = singleActivities;
      randomNum = randomNumSingle;
    }
    else if (setting == 'couple') {
      activityArray = coupleActivies;
      randomNum = randomNumCouple;
    }
    else {
      activityArray = groupActivities;
      randomNum = randomNumGroup;
    }
    return activityArray[randomNum];
  } 

  return (
      <View style={styles.container}>
        <View style={{paddingTop: 10, flex: 1}}>
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.FULL_BANNER}
            />
        </View>
        <View>
          <TouchableHighlight
            onPress={useForceUpdate}>
            <View>
              <Text style={styles.mainText}>{getRandomActivity(setting)}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{flex: 2}}>
          <BannerAd
            unitId={adUnitId2}
            size={BannerAdSize.FULL_BANNER}
            />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF0F5',
  },
  mainText: {
      color: '#008B8B',
      fontSize: 45,
      fontWeight: 'bold',
      padding: 60,
  }
});

export default MainScreen