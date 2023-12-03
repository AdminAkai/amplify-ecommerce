/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_AMPLIFYECOMMERCE_PRODUCTTABLE_NAME
	API_AMPLIFYECOMMERCE_PRODUCTTABLE_ARN
	API_AMPLIFYECOMMERCE_GRAPHQLAPIIDOUTPUT
	VITE_STRIPE_KEY
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  for (const record of event.Records) {
    console.log(record.eventID)
    console.log(record.eventName)
    console.log('DynamoDB Record: %j', record.dynamodb)
  }
  return Promise.resolve('Successfully processed DynamoDB record')
}
