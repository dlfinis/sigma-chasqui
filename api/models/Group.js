/**
* Group.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  adapter: 'mongodb',
  attributes: {
      name: {
         type: 'string',
         unique: true,
         required: true
      },
      access_level: 'integer'
  }
};

sails.config.models.migrate='alter';

