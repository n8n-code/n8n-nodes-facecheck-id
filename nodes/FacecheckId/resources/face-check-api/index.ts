import type { INodeProperties } from 'n8n-workflow';

export const faceCheckApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					]
				}
			},
			"options": [
				{
					"name": "POST API Delete Pic",
					"value": "POST API Delete Pic",
					"action": "Remove an image from a search request",
					"description": "Remove an image from a search request",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/delete_pic"
						}
					}
				},
				{
					"name": "POST API Info",
					"value": "POST API Info",
					"action": "Returns remaining search credits, search engine online status, and number of indexed faces",
					"description": "Returns remaining search credits, search engine online status, and number of indexed faces",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/info"
						}
					}
				},
				{
					"name": "POST API Search",
					"value": "POST API Search",
					"action": "Submit a search request to the search engine and get back search results that contain URLs and all images in base64/webp format",
					"description": "Submit a search request to the search engine and get back search results that contain URLs and all images in base64/webp format",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/search"
						}
					}
				},
				{
					"name": "POST API Upload Pic",
					"value": "POST API Upload Pic",
					"action": "Upload 1 to 3 images as multipart/form-data, and get back a search request that contains id_search and 1 to 3 preview thumbnails",
					"description": "Upload 1 to 3 images as multipart/form-data, and get back a search request that contains id_search and 1 to 3 preview thumbnails",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/upload_pic"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/delete_pic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Delete Pic"
					]
				}
			}
		},
		{
			"displayName": "ID Search",
			"name": "id_search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id_search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Delete Pic"
					]
				}
			}
		},
		{
			"displayName": "ID Pic",
			"name": "id_pic",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id_pic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Delete Pic"
					]
				}
			}
		},
		{
			"displayName": "Bearer API Key",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Put **_ONLY_** your JWT Bearer token on textbox below!",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Delete Pic"
					]
				}
			}
		},
		{
			"displayName": "POST /api/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Info"
					]
				}
			}
		},
		{
			"displayName": "Bearer API Key",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Put **_ONLY_** your JWT Bearer token on textbox below!",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Info"
					]
				}
			}
		},
		{
			"displayName": "POST /api/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Search"
					]
				}
			}
		},
		{
			"displayName": "Demo",
			"name": "demo",
			"type": "boolean",
			"default": false,
			"description": "true = searches only the first 100,000 faces, good for testing/debugging",
			"routing": {
				"send": {
					"property": "demo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Search"
					]
				}
			}
		},
		{
			"displayName": "ID Captcha",
			"name": "id_captcha",
			"type": "string",
			"default": null,
			"description": "captcha is not used",
			"routing": {
				"send": {
					"property": "id_captcha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Search"
					]
				}
			}
		},
		{
			"displayName": "ID Search",
			"name": "id_search",
			"type": "string",
			"default": "3vdi8t-s_8DAAA7D5E784616",
			"description": "",
			"routing": {
				"send": {
					"property": "id_search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Search"
					]
				}
			}
		},
		{
			"displayName": "Status Only",
			"name": "status_only",
			"type": "boolean",
			"default": false,
			"description": "true = don't submit a new search",
			"routing": {
				"send": {
					"property": "status_only",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Search"
					]
				}
			}
		},
		{
			"displayName": "With Progress",
			"name": "with_progress",
			"type": "boolean",
			"default": true,
			"description": "true = return imediately with a progress. False waits until search is finished.",
			"routing": {
				"send": {
					"property": "with_progress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Search"
					]
				}
			}
		},
		{
			"displayName": "Bearer API Key",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Put **_ONLY_** your JWT Bearer token on textbox below!",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Search"
					]
				}
			}
		},
		{
			"displayName": "POST /api/upload_pic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Upload Pic"
					]
				}
			}
		},
		{
			"displayName": "POST /api/upload_pic<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Upload Pic"
					]
				}
			}
		},
		{
			"displayName": "Bearer API Key",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Put **_ONLY_** your JWT Bearer token on textbox below!",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Face Check API"
					],
					"operation": [
						"POST API Upload Pic"
					]
				}
			}
		},
];
