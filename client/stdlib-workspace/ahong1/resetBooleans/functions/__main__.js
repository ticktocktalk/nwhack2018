/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {any}
*/
module.exports = (name = 'world', context, callback) => {

	var AWS = require("aws-sdk");
	AWS.config.update({
			accessKeyId: 'AKIAIIZPL74DK4BXD45Q',
			secretAccessKey: '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',
			region: "us-west-2"
	});
	var DB = new AWS.DynamoDB();

	var params = {
		ExpressionAttributeNames: {
			"#NP": "isFaster"
		},
		ExpressionAttributeValues: {
			":t": {
				BOOL: false
			}
		},

		ReturnValues: "ALL_NEW",
		TableName: "nwHackDemo",
		UpdateExpression: "SET #NP = :t ",
		Key: {
			data: {
				S: "Data"
			}
		}
	}

	DB.updateItem(params, function(err,data){
		if (err) console.log(err, err.stack); // an error occurred
		// else     console.log(data);
		var params = {
			ExpressionAttributeNames: {
				"#NP": "isLouder"
			},
			ExpressionAttributeValues: {
				":t": {
					BOOL: false
				}
			},
	
			ReturnValues: "ALL_NEW",
			TableName: "nwHackDemo",
			UpdateExpression: "SET #NP = :t ",
			Key: {
				data: {
					S: "Data"
				}
			}
		}
	
		DB.updateItem(params, function(err,data){
			if (err) console.log(err, err.stack); // an error occurred
			// else     console.log(data);
			var params = {
				ExpressionAttributeNames: {
					"#NP": "isQuieter"
				},
				ExpressionAttributeValues: {
					":t": {
						BOOL: false
					}
				},
		
				ReturnValues: "ALL_NEW",
				TableName: "nwHackDemo",
				UpdateExpression: "SET #NP = :t ",
				Key: {
					data: {
						S: "Data"
					}
				}
			}
		
			DB.updateItem(params, function(err,data){
				if (err) console.log(err, err.stack); // an error occurred
				// else     console.log(data);
				var params = {
					ExpressionAttributeNames: {
						"#NP": "isSlower"
					},
					ExpressionAttributeValues: {
						":t": {
							BOOL: false
						}
					},
			
					ReturnValues: "ALL_NEW",
					TableName: "nwHackDemo",
					UpdateExpression: "SET #NP = :t ",
					Key: {
						data: {
							S: "Data"
						}
					}
				}
			
				DB.updateItem(params, function(err,data){
					if (err) console.log(err, err.stack); // an error occurred
					// else     console.log(data);
					var params = {
						ExpressionAttributeNames: {
							"#NP": "isSmile"
						},
						ExpressionAttributeValues: {
							":t": {
								BOOL: false
							}
						},
				
						ReturnValues: "ALL_NEW",
						TableName: "nwHackDemo",
						UpdateExpression: "SET #NP = :t ",
						Key: {
							data: {
								S: "Data"
							}
						}
					}
				
					DB.updateItem(params, function(err,data){
						if (err) console.log(err, err.stack); // an error occurred
						// else     console.log(data);
						var params = {
							ExpressionAttributeNames: {
								"#NP": "question"
							},
							ExpressionAttributeValues: {
								":t": {
									BOOL: false
								}
							},
					
							ReturnValues: "ALL_NEW",
							TableName: "nwHackDemo",
							UpdateExpression: "SET #NP = :t ",
							Key: {
								data: {
									S: "Data"
								}
							}
						}
					
						DB.updateItem(params, function(err,data){
							if (err) console.log(err, err.stack); // an error occurred
							// else     console.log(data);
							
					
							callback(null, data);
						})
					})
					
				})
				
			})
			
		})
		
	})

};
