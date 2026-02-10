// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


	console.log('live-exec active');

	const onDebug = vscode.debug.onDidChangeActiveDebugSession(session => 
		{
			setInterval(() => {
				vscode.debug.activeDebugSession?.customRequest('pause')

				


				vscode.debug.activeDebugSession?.customRequest('continue')

			}, 1000);	

		};
	);
	
}

export function deactivate() {}
