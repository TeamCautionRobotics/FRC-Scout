Teams = new Meteor.Collection('teams');

Template.teamList.teams = function() {
  return Teams.find();
};
