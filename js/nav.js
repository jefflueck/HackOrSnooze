'use strict';

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug('navAllStories', evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on('click', '#nav-all', navAllStories);

// When a user clicks submit to see the story form.

// My function first attempt
// function showStoryForm(evt) {
//   console.debug('showStoryForm', evt);
//   hidePageComponents();
//   $createStoryForm.show();
// }

// $showStoryForm.on('click', showStoryForm);

// Attempt 2
// function navSubmitClick(evt) {
//   console.debug('navSubmitClick', evt);
//   hidePageComponents();
//   $allStoriesList.show();
//   $createStoryForm.show();
// }

// $navSubmit.on('click', navSubmitClick);
let $navSubmitStory = $('#navSubmitStory');
let $submitForm = $('#submitForm');

function navSubmitStoryClick(evt) {
  console.debug('navSubmitStoryClick', evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
  submitNewStory;
}

$navSubmitStory.on('click', navSubmitStoryClick);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug('navLoginClick', evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on('click', navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug('updateNavOnLogin');
  $('.main-nav-links').show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
