/*
  Voicemail Funlet

  Description:
    Play a message then record voicemail (stage 1). Once the voicemail
    has been recorded (stage 2) or the optional speech-to-text transcription
    has completed (stage 3), send an email notification for the new voicemail.

    This is an upgrade of the Voicemail Twimlet [1].
    Designed to be backward-compatible with the Twimlet, it was
    extended to offer better support for internationalization.

  Contents:
    1. Configuration
    2. Input Parameters
    3. Output Helpers
    4. Main Handler
    5. References
*/

/*
  1. Configuration

  Here you can change values for the input parameters,
  directly in the script.

  These values will be superseded by HTTP parameters and properties
  defined in the environment. You can customize the names and priorities
  of these various parameters in the next section: Input Parameters.
*/

let config = {

};
exports.config = config;

/*
  2. Input Parameters

  Each input parameter Foo is read by a separate function getFoo()
  which takes one parameter for each source:

    * params - object, the set of HTTP parameters
               from the URL (GET) or the body (POST) of the query
    * env - object, the set of environment properties
            defined in the Twilio account
    * config - object, the configuration object
               defined above in this script

  The HTTP parameters are considered first, then environment properties,
  then the script parameters. This can be customized in the functions below.
*/
exports.input = {};

/*
  3. Output Helpers

  These helper functions build part of the output.

  This is where you can fine-tune the TwiML elements and attributes
  produced in response to each stage of the Funlet.
*/
exports.output = {};

/*
  4. Main Handler

  This is the entry point to your Twilio Function,
  which will run to process an incoming HTTP request
  such as the ones generated by Twilio events.
*/

exports.handler = function(env, params, reply) {
  const NO_ERROR = null;
  throw Error("Not implemented!");
  reply(NO_ERROR, 'response');
};

/*
  5. References

    [1] Voicemail Twimlet
    https://www.twilio.com/labs/twimlets/voicemail

    [2] Voicemail Funlet
    https://github.com/twilio-labs/function-templates
                                  /tree/master/funlet-voicemail

    [3] Voicemail Funlet: Discussion
    https://github.com/twilio-labs/function-templates/issues/14
*/
