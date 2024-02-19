var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:3000,
    loading: true,
    photo: true,
    content: 'Hello. This is Taylor, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        photo: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Sure. That can be handled. First, could you type in your order number?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Alright. I am contacting the restaurant to order your drink and dessert.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        photo: true,
        content:'This is making me hungry as well. I envy you!'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Please hold on while connecting to the restaurant.'
    });
}).then(function(){
    return botui.message.add({
        delay:15000,
        loading: true,
        photo: true,
        content:'It is taking longer than usual. The restaurant might be busy at the moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I hate the wait myself... But let\'s wait a little bit more.'
    });
}).then(function(){
    return botui.message.add({
        delay:20000,
        loading: true,
        photo: true,
        content:'Your order has been modified. Is there anything else you need?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Great. Your request has been processed.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I want to eat something now too!'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Enjoy the meal soon and see you next time. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2]}, "*");
};
