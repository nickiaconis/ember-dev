/* globals QUnit */

function RunLoopAssertion(env){
  this.env = env;
}

RunLoopAssertion.prototype = {
  reset: function(){},
  inject: function(){},
  assert: function(){
    var run = this.env.Ember.run;

    // Close out any remaining run loops
    if (run.currentRunLoop) {
      while (run.currentRunLoop) {
        run.end();
      }
    }

    // Cancel any remaining timers
    if (run.hasScheduledTimers()) {
      run.cancelTimers();
    }
  },
  restore: function(){}
};

export default RunLoopAssertion;
