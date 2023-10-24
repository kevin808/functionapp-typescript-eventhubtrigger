import { AzureFunction, Context } from "@azure/functions"

const eventHubTrigger: AzureFunction = async function (context: Context, ingressEventHubMessagesConsumer: any[]): Promise<void> {
    ingressEventHubMessagesConsumer.forEach((message, index) => {
        context.log('eventHubTrigger Message received: ', message);
        context.bindings.egressEventHubMessageProducer = message;
        context.log('eventHubTrigger Message sent: ',index,message);
    });
};
 
export default eventHubTrigger;

