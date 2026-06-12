import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { faceCheckApiDescription } from './resources/face-check-api';

export class FacecheckId implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Facecheck ID',
                name: 'N8nDevFacecheckId',
                icon: { light: 'file:./facecheck-id.svg', dark: 'file:./facecheck-id.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Integrate FaceCheck facial search into your app, website, or software platform.',
                defaults: { name: 'Facecheck ID' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFacecheckIdApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Face Check API",
					"value": "Face Check API",
					"description": ""
				}
			],
			"default": ""
		},
		...faceCheckApiDescription
                ],
        };
}
