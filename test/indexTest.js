require ( './root.js' );


describe("shout(string)", function shout(string) {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
  function shout(string) {
    return string.toUpperCase();
  }
});

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
    function whisper(string) {
      return string.toLowerCase();
    }
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

      console.log.restore();
    
  })
})
function logShout (aWord) {
  console.log(aWord.toUpperCase( ));
}



describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})
function logWhisper (internet) {
  console.log(internet.toLowerCase());
}

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
function sayHiToHeadphonedRoommate (puppy) {
  var cntHearYou = "I can't hear you!";
  var yes = "YES INDEED!";
  var loveTo = "I would love to!";

  if (puppy.toLowerCase(puppy) === puppy) {
    return cntHearYou;
  }
  else if (puppy.toUpperCase(puppy) === puppy) {
    return yes;
  }
  else if ("Let's have dinner together!" === puppy) {
    return loveTo;
  }


}
