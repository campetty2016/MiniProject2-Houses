
/*
	Mini Project 2
	Author: Candace Petty
	Date: 3/24/16
	File Name: app.js
*/

//Loads the Data from the XML File
function LoadXML( file ) {

	//Creates a New Instance of An ActiveXObject
	if ( window.ActiveXObject ) {
		xhttp = new ActiveXObject( "Msxml2.XMLHTTP" );
	} else {

		//Creates a New XMLHttpRequest
		xhttp = new XMLHttpRequest();
	}

	//Opens the Request
	xhttp.open( "GET", file, false );

	try {
		xhttp.responseType = "msxml-document";
	} catch ( err ) {}

	//Sends the Response
	xhttp.send( "" );

	//Returns the Response
	return xhttp.responseXML;
}

//Changes the Value of the Selection Box
function ChangeValue( xml ) {

	xmlDoc = LoadXML( "homes.xml" );

	//Retrieves House Elements from XML
	var Node = xmlDoc.getElementsByTagName( 'House' );

	//Retrieves the Selection Form
	SelectValue = document.getElementById( "SelectType" );

	//Loops Through All the Instances of the House Nodes in the XML File
	for ( i = 0; i < Node.length; i++ ) {

		//If the Value of the Select Form Option Equals Ranch, then Set Attribute to Ranch
		if ( SelectValue.value === "Ranch" ) {
			var Ranch = Node[ i ].setAttribute( "Type", "Ranch" );
			console.log( Ranch );
			Content = Node[ i ].getAttribute( "Type" );

			//If the Value of the Select Form Option Equals Traditional American, then Set Attribute to Traditional American
		} else if ( SelectValue.value === "Traditional American" ) {
			var Traditional = Node[ i ].setAttribute( "Type", "Traditional American" );
			console.log( Traditional );
			Content = Node[ i ].getAttribute( "Type" );

			//If the Value of the Select Form Option Equals Other, then Set Attribute to Other
		} else if ( SelectValue.value === "Other" ) {
			var Other = Node[ i ].setAttribute( "Type", "Other" );
			console.log( Other );
			Content = Node[ i ].getAttribute( "Type" );
		}
	}
}

//Displays Results on the Page
function displayResult() {

	//Loads XML Files
	xml = LoadXML( "homes.xml" );
	xsl = LoadXML( "homes.xsl" );

	if ( window.ActiveXObject || xhttp.responseType == "msxml-document" ) {

		//Transforms the Information from XSL
		Content = xml.transformNode( xsl );

		//Assigns the Inner HTML of the Content to the Result of the Transformed XSL
		document.getElementById( "Content" ).innerHTML = Content;

		//Creates a New Result Document
	} else if ( document.implementation && document.implementation.createDocument ) {

		//Creates a New Instance of an XSLTProcessor
		xsltProcessor = new XSLTProcessor();

		//Imports Stylesheet
		xsltProcessor.importStylesheet( xsl );

		//Creates Result Document
		resultDocument = xsltProcessor.transformToFragment( xml, document );

		//Appends Result Document to Screeen
		document.getElementById( "Content" ).appendChild( resultDocument );

		//Calls ChangeValue Function
		ChangeValue( xml );
	}
}
