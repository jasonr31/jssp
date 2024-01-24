!function(){metadata={systemName:"MSTeamsJSSP",displayName:"Microsoft Teams Connector",description:"A connector for Microsoft Teams"};const e="https://graph.microsoft.com/v1.0";function t(e,t,s){var a=JSON.stringify({"template@odata.bind":"https://graph.microsoft.com/v1.0/teamsTemplates('"+t.teamTemplateId+"')","group@odata.bind":"https://graph.microsoft.com/v1.0/groups('"+t.groupId+"')"});n("https://graph.microsoft.com/v1.0/teams/",a,"POST",(function(e){"function"==typeof s&&s(e)}))}function s(t,s,a){let i=s.userPrincipalName;if("string"!=typeof i)throw new Error("properties[TeamUserPrincipalName] is not of type string");n(e+"/users/"+encodeURIComponent(i),null,"GET",(function(e){"function"==typeof a&&a(e)}))}function a(t,s,a){var i=JSON.stringify({"@odata.id":e+"/users/"+s.userId});let o=s.id;if("string"!=typeof o)throw new Error("properties[TeamId] is not of type string");n(e+"/groups/"+encodeURIComponent(o)+"/owners/$ref",i,"POST",(function(e){"function"==typeof a&&a(e)}))}function i(t,s,a){var i=JSON.stringify({"@odata.id":e+"/directoryObjects/"+s.userId});let o=s.id;if("string"!=typeof o)throw new Error("properties[TeamId] is not of type string");n(e+"/groups/"+encodeURIComponent(o)+"/members/$ref",i,"POST",(function(e){"function"==typeof a&&a(e)}))}function n(e,t,s,a){var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState)if(201==i.status){var e=JSON.parse(i.responseText);"function"==typeof a&&a(e)}else if(204==i.status)"function"==typeof a&&a(i.responseText);else if(200==i.status){e=JSON.parse(i.responseText);"function"==typeof a&&a(e)}else if(202==i.status)"function"==typeof a&&a(null);else{if(400==i.status){e=JSON.parse(i.responseText);throw new Error(e.error.code+": "+e.error.message)}if(404!=i.status){postResult({});e=JSON.parse(i.responseText);throw new Error(e.error.code+": "+e.error.message)}if("No Team found with Group id"!=(e=JSON.parse(i.responseText)).error.message.startswith)throw new Error(e.error.code+": "+e.error.message)}},console.log("MSTeamsConnector ExecuteRequest: "+e),i.open(s.toUpperCase(),e),i.withCredentials=!0,i.setRequestHeader("Accept","application/json"),"PUT"!=s.toUpperCase()&&"POST"!=s.toUpperCase()&&"PATCH"!=s.toUpperCase()||i.setRequestHeader("Content-Type","application/json"),i.send(t)}function o(e,t){postResult({displayName:t.displayName,description:t.description,isSuccessful:t.isSuccessful})}function r(e,t){postResult({id:t.id,displayName:t.displayName,description:t.description,email:t.email,weburl:t.weburl,isSuccessful:t.isSuccessful})}function p(e,t,s){switch(e){case"createWordTab":l(t,s,d("Word",s));break;case"createExcelTab":l(t,s,d("Excel",s));break;case"createPowerPointTab":l(t,s,d("PowerPoint",s));break;case"createPdfTab":l(t,s,d("PDF",s));break;case"createOneNoteTab":l(t,s,d("OneNote",s));break;case"createPlannerTab":l(t,s,d("Planner",s));break;case"createSharePointTab":l(t,s,d("SharePoint",s));break;case"createMsFormsTab":l(t,s,d("MicrosoftForms",s));break;case"createStreamTab":l(t,s,d("MicrosoftStream",s));break;case"createWebsiteTab":l(t,s,d("Website",s));break;case"createWikiTab":l(t,s,d("Wiki",s));break;case"createPowerBiTab":l(t,s,d("PowerBI",s));break;case"createDocumentLibraryTab":l(t,s,d("DocumentLibrary",s));break;case"createCustomTab":l(t,s,d("Custom",s));break;default:throw new Error("The object "+e+" is not supported.")}}function l(t,s,a){!function(t,s,a,i){let o=s.teamId;if("string"!=typeof o)throw new Error("properties[TabTeamId] is not of type string");let r=s.channelId;if("string"!=typeof r)throw new Error("properties[TabChannelId] is not of type string");n(e+"/teams/"+encodeURIComponent(o)+"/channels/"+encodeURIComponent(r)+"/tabs",a,"POST",(function(e){"function"==typeof i&&i(e)}))}(0,s,a,(function(e){postResult({id:e.id,displayName:e.displayName,weburl:e.webUrl,configEntityId:e.configuration.entityId,configContentUrl:e.configuration.contentUrl,configWebsiteUrl:e.configuration.websiteUrl,configRemoveUrl:e.configuration.removeUrl,isSuccessful:!0})}))}function d(e,t){var s;switch(e){case"Word":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.file.staticviewer.word"});break;case"Excel":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.file.staticviewer.excel"});break;case"Powerpoint":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.file.staticviewer.powerpoint"});break;case"PDF":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.file.staticviewer.pdf"});break;case"OneNote":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/0d820ecd-def2-4297-adad-78056cde7c78"});break;case"Planner":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.planner"});break;case"SharePoint":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88"});break;case"MicrosoftForms":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/81fef3a6-72aa-4648-a763-de824aeafb7d"});break;case"MicrosoftStream":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoftstream.embed.skypeteamstab"});break;case"Website":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.web"});break;case"Wiki":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.wiki"});break;case"PowerBI":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.powerbi"});break;case"DocumentLibrary":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/com.microsoft.teamspace.tab.files.sharepoint"});break;case"Custom":s=JSON.stringify({displayName:t.displayName,"teamsApp@odata.bind":"https://graph.microsoft.com/v1.0/appCatalogs/teamsApps/"+t.teamsAppAppId});break;default:throw new Error("Tab Type is not supported or app is not installed!")}return s}ondescribe=function(){postSchema({objects:{team:{displayName:"Team",description:"Team",properties:{id:{displayName:"Team Id",type:"string"},weburl:{displayName:"Web Url",type:"string"},displayName:{displayName:"Display Name",type:"string"},creationDate:{displayName:"Created On",type:"string"},description:{displayName:"Description",type:"string"},email:{displayName:"Email",type:"string"},mailEnabled:{displayName:"Mail Enabled",type:"boolean"},mailNickname:{displayName:"Mail Nickname",type:"string"},archiveStatus:{displayName:"Archive Status",type:"string"},operationId:{displayName:"Operation Id",type:"string"},operationType:{displayName:"Operation Type",type:"string"},lastActionDate:{displayName:"Last Action Date",type:"string"},attemptsCount:{displayName:"Attempts Count",type:"string"},targetResourceId:{displayName:"Target Resource Id",type:"string"},targetResourceLocation:{displayName:"Target Resource Location",type:"string"},archiveError:{displayName:"Error",type:"string"},userPrincipalName:{displayName:"User Principal Name",type:"string"},resourceProvisioningOptions:{displayName:"Resource Provisioning Options",type:"string"},isArchived:{displayName:"Is Archived",type:"boolean"},isSuccessful:{displayName:"Is Successful",type:"boolean"},requestStatusUrl:{displayName:"Request Status Url",type:"boolean"},msAllowCreateUpdateChannels:{displayName:"Allow create/update channels to members",type:"boolean"},msAllowDeleteChannels:{displayName:"Allow delete channels to members",type:"boolean"},msAllowAddRemoveApps:{displayName:"Allow add/remove apps to members",type:"boolean"},msAllowCreateUpdateRemoveTabs:{displayName:"Allow create/update/remove tabs to members",type:"boolean"},msAllowCreateUpdateRemoveConnectors:{displayName:"Allow create/update/remove connectors to members",type:"boolean"},gsAllowCreateUpdateChannels:{displayName:"Allow create/update channels to guests",type:"boolean"},gsAllowDeleteChannels:{displayName:"Allow delete channels to guests",type:"boolean"},msgsAllowUserEditMessages:{displayName:"Allow user to edit messages",type:"boolean"},msgsAllowUserDeleteMessages:{displayName:"Allow user to delete messages",type:"boolean"},msgsAllowOwnerDeleteMessages:{displayName:"Allow owner to delete messages",type:"boolean"},msgsAllowTeamMentions:{displayName:"Allow team mentions",type:"boolean"},msgsAllowChannelMentions:{displayName:"Allow channel mentions",type:"boolean"},fsAllowGiphy:{displayName:"Allow Giphy",type:"boolean"},fsAllowStickersAndMemes:{displayName:"Allow stickers and memes",type:"boolean"},fsAllowCustomMemes:{displayName:"Allow custom memes",type:"boolean"},groupId:{displayName:"Team group Id",type:"string"},teamTemplateId:{displayName:"Team template Id",type:"string"}},methods:{get:{displayName:"Get",description:"Retrieves the details of a Team",type:"read",inputs:["id"],requiredInputs:["id"],outputs:["id","displayName","creationDate","description","email","mailEnabled","mailNickname","weburl","archiveStatus","isSuccessful"]},createFromGroup:{displayName:"CreateFromGroup",description:"Creates a Team from an Entra group. Pass in the GroupId from AD/Entra as it is the same value as the TeamId will be.",type:"create",inputs:["groupId","teamTemplateId"],requiredInputs:["groupId","teamTemplateId"],outputs:["isSuccessful"]},create:{displayName:"Create",description:"Creates a standard team",type:"create",inputs:["displayName","description","userPrincipalName","teamTemplateId"],requiredInputs:["displayName","userPrincipalName","teamTemplateId"],outputs:["displayName","description","isSuccessful"]},archive:{displayName:"Archive",description:"Archives a Team (makes it read-only)",type:"execute",inputs:["id"],requiredInputs:["id"],outputs:["id","requestStatusUrl","isSuccessful"]},unarchive:{displayName:"Unarchive",description:"Unarchives a Team",type:"execute",inputs:["id"],requiredInputs:["id"],outputs:["id","requestStatusUrl","isSuccessful"]},addMember:{displayName:"Add Member",description:"Adds a member to a Team",type:"create",inputs:["id","userPrincipalName"],requiredInputs:["id","userPrincipalName"],outputs:["isSuccessful"]},removeMember:{displayName:"Remove Member",description:"Removes a member from a Team",type:"delete",inputs:["id","userPrincipalName"],requiredInputs:["id","userPrincipalName"],outputs:["isSuccessful"]},update:{displayName:"Update",description:"Updates a Team's settings",type:"update",inputs:["id","msAllowCreateUpdateChannels","msAllowDeleteChannels","msAllowAddRemoveApps","msAllowCreateUpdateRemoveTabs","msAllowCreateUpdateRemoveConnectors","gsAllowCreateUpdateChannels","gsAllowDeleteChannels","msgsAllowUserEditMessages","msgsAllowUserDeleteMessages","msgsAllowUserDeleteMessages","msgsAllowTeamMentions","msgsAllowChannelMentions","fsAllowGiphy","fsAllowStickersAndMemes","fsAllowCustomMemes"],requiredInputs:["id"],outputs:["isSuccessful"]},clone:{displayName:"Copy/Clone",description:"Makes a copy of an existing Team",type:"create",inputs:["id","displayName","description","mailNickname"],requiredInputs:["id","displayName","description","mailNickname"],outputs:["id","requestStatusUrl","isSuccessful"]},addOwner:{displayName:"Add Owner",description:"Adds an Owner to a Team",type:"execute",inputs:["id","userPrincipalName"],requiredInputs:["id","userPrincipalName"],outputs:["isSuccessful"]},list:{displayName:"List",description:"Lists all Teams and groups without Teams",type:"list",parameters:{displayNameStartsWith:{displayName:"Display Name Starts With",type:"string"}},outputs:["id","displayName","resourceProvisioningOptions"]},myTeamsList:{displayName:"List My Teams",description:"Lists all Teams you belong to",type:"list",outputs:["id","displayName","description","isArchived"]}}},channel:{displayName:"Channel",description:"Channel",properties:{id:{displayName:"Channel Id",description:"Channel Id",type:"string"},displayName:{displayName:"Display Name",description:"Display Name",type:"string"},description:{displayName:"Description",description:"Description",type:"string"},email:{displayName:"Email",description:"Email",type:"string"},weburl:{displayName:"Web URL",description:"Web URL",type:"string"},isSuccessful:{displayName:"Is Successful",description:"Is Successful",type:"string"},teamId:{displayName:"Team Id",description:"Team Id",type:"string"},messageSubject:{displayName:"Subject",description:"Message Subject",type:"string"},messageId:{displayName:"Message Id",description:"Message Id",type:"string"},messageBody:{displayName:"Body",description:"Message Body",type:"string"},messageIsImportant:{displayName:"Is Important",description:"Message Importance (Normal/High)",type:"boolean"}},methods:{get:{displayName:"Get",description:"Retrieves the details of a Channel",type:"read",inputs:["teamId","id"],requiredInputs:["id","teamId"],outputs:["id","displayName","description","email","weburl","isSuccessful"]},list:{displayName:"List",description:"List the channels in a Team",type:"list",inputs:["teamId"],requiredInputs:["teamId"],outputs:["id","displayName","description","email"]},create:{displayName:"Create",description:"Creates a new Channel",type:"create",inputs:["teamId","displayName","description"],requiredInputs:["teamId","displayName"],outputs:["id","displayName","description","email","weburl","isSuccessful"]},delete:{displayName:"Delete",description:"Deletes a Channel",type:"delete",inputs:["id","teamId"],requiredInputs:["id","teamId"],outputs:["isSuccessful"]},update:{displayName:"Update",description:"Updates a Channel",type:"update",inputs:["teamId","id","displayName","description"],requiredInputs:["id","teamId","displayName","description"],outputs:["isSuccessful"]},sendMessage:{displayName:"Send Message",description:"Sends a Message to a Channel",type:"create",inputs:["teamId","id","messageSubject","messageBody","messageIsImportant"],requiredInputs:["teamId","id","messageBody"],outputs:["isSuccessful","messageId"]},replyMessage:{displayName:"Reply to a Message",description:"Reply to a Message in a Channel",type:"create",inputs:["teamId","id","messageId","messageBody"],requiredInputs:["teamId","id","messageId","messageBody"],outputs:["isSuccessful"]}}},tab:{displayName:"Tab",description:"Tab",properties:{id:{displayName:"Tab Id",description:"Tab Id",type:"string"},displayName:{displayName:"Display Name",description:"Display Name",type:"string"},configEntityId:{displayName:"Entity Id",description:"Entity Id",type:"string"},configContentUrl:{displayName:"Content URL",description:"Content URL",type:"string"},configWebsiteUrl:{displayName:"Website URL",description:"Website URL",type:"string"},configRemoveUrl:{displayName:"Remove URL",description:"Remove URL",type:"string"},teamsAppAppId:{displayName:"App Id",description:"App Id",type:"string"},teamsAppExternalId:{displayName:"External Id",description:"External Id",type:"string"},teamsAppAppDisplayName:{displayName:"App Display Name",description:"App Display Name",type:"string"},teamsAppDistMethod:{displayName:"Distribution Method",description:"Distribution Method",type:"string"},sortOrderIndex:{displayName:"Sort Order Index",description:"Sort Order Index",type:"string"},weburl:{displayName:"Web URL",description:"Web URL",type:"string"},isSuccessful:{displayName:"Is Successful",description:"Is Successful",type:"boolean"},teamId:{displayName:"Team Id",description:"Team Id",type:"string"},channelId:{displayName:"Channel Id",description:"Channel Id",type:"string"}},methods:{get:{displayName:"Get",description:"Get the details of a tab.",type:"read",inputs:["id","teamId","channelId"],requiredInputs:["id","teamId","channelId"],outputs:["id","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","teamsAppAppId","teamsAppExternalId","teamsAppAppDisplayName","teamsAppDistMethod","sortOrderIndex","weburl"]},list:{displayName:"List",description:"List tabs",type:"list",inputs:["teamId","channelId"],requiredInputs:["teamId","channelId"],outputs:["id","displayName","weburl"]},createWordTab:{displayName:"Create Word tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createExcelTab:{displayName:"Create Excel tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createPowerPointTab:{displayName:"Create PowerPoint tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createPdfTab:{displayName:"Create PDF tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createOneNoteTab:{displayName:"Create OneNote tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createPlannerTab:{displayName:"Create Planner tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createSharePointTab:{displayName:"Create SharePoint tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createMsFormsTab:{displayName:"Create Forms tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createStreamTab:{displayName:"Create Stream tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createWebsiteTab:{displayName:"Create Website tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createWikiTab:{displayName:"Create Wiki tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createPowerBiTab:{displayName:"Create PowerBI tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createDocumentLibraryTab:{displayName:"Create Document tab",type:"create",inputs:["teamId","channelId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},createCustomTab:{displayName:"Create custom tab",type:"create",inputs:["teamId","channelId","teamsAppAppId","displayName","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl"],requiredInputs:["teamId","channelId","teamsAppAppId","displayName"],outputs:["id","displayName","weburl","configEntityId","configContentUrl","configWebsiteUrl","configRemoveUrl","isSuccessful"]},delete:{displayName:"Delete tab",type:"delete",inputs:["teamId","channelId","id"],requiredInputs:["teamId","channelId","id"],outputs:["isSuccessful"]},update:{displayName:"Update tab",type:"update",inputs:["teamId","channelId","id","displayName"],requiredInputs:["teamId","channelId","id"],outputs:["isSuccessful"]}}},app:{displayName:"App",description:"App",properties:{id:{displayName:"App Id",description:"App Id",type:"string"},teamId:{displayName:"Team Id",description:"Team Id",type:"string"},displayName:{displayName:"App Display Name",description:"App Display Name",type:"string"},version:{displayName:"version",description:"version",type:"string"},teamsAppDefinitionId:{displayName:"Teams App Definition Id",description:"Teams App Definition Id",type:"string"},teamsAppId:{displayName:"Teams App Id",description:"Teams App Id",type:"string"}},methods:{list:{displayName:"List installed apps",type:"list",inputs:["teamId"],requiredInputs:["teamId"],outputs:["id","displayName","version","teamsAppDefinitionId","teamsAppId"]}}}}})},onexecute=function({objectName:l,methodName:d,parameters:c,properties:m}){switch(l){case"team":!function(r,p,l){null==l&&null==p||(null==l&&null!==p?p.isSuccessful=!0:l.isSuccessful=!0);switch(r){case"get":!function(t,s){s.isSuccessful=!0,function(t,s,a){let i=s.id;if("string"!=typeof i)throw new Error("properties[TeamId] is not of type string");n(e+"/groups/"+encodeURIComponent(i),null,"GET",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(a){s.displayName=a.displayName,s.creationDate=a.createdDateTime,s.description=a.description,s.email=a.mail,s.mailEnabled=a.mailEnabled,s.mailNickname=a.mailNickname,function(t,s,a){let i=s.id;if("string"!=typeof i)throw new Error("properties[TeamId] is not of type string");n(e+"/teams/"+encodeURIComponent(i),null,"GET",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){s.weburl=e.webUrl,s.archiveStatus=e.isArchived,o(t,s)}))}))}(p,l);break;case"createFromGroup":!function(e,s){s.isSuccessful=!0,t(e,s,(function(t){o(e,s)}))}(p,l);break;case"create":!function(t,s){s.isSuccessful=!0,function(t,s,a){var i=JSON.stringify({"template@odata.bind":"https://graph.microsoft.com/v1.0/teamsTemplates('"+s.teamTemplateId+"')",displayName:s.displayName,description:s.description,members:[{"@odata.type":"#microsoft.graph.aadUserConversationMember",roles:["owner"],"user@odata.bind":"https://graph.microsoft.com/v1.0/users('"+s.userPrincipalName+"')"}]});n(e+"/teams/",i,"POST",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){o(t,s)}))}(p,l);break;case"add":!function(e,n){t(e,n,(function(t){n.weburl=t.webUrl,s(e,n,(function(t){n.userId=t.id,a(e,n,(function(t){i(e,n,(function(t){o(e,n)}))}))}))}))}(p,l);break;case"update":!function(t,s){!function(t,s,a){var i=JSON.stringify({memberSettings:{allowCreateUpdateChannels:s.msAllowCreateUpdateChannels,allowDeleteChannels:s.msAllowDeleteChannels,allowAddRemoveApps:s.msAllowAddRemoveApps,allowCreateUpdateRemoveTabs:s.msAllowCreateUpdateRemoveTabs,allowCreateUpdateRemoveConnectors:s.msAllowCreateUpdateRemoveConnectors},guestSettings:{allowCreateUpdateChannels:s.gsAllowCreateUpdateChannels,allowDeleteChannels:s.gsAllowDeleteChannels},messagingSettings:{allowUserEditMessages:s.msgsAllowUserEditMessages,allowUserDeleteMessages:s.msgsAllowUserDeleteMessages,allowOwnerDeleteMessages:s.msgsAllowUserDeleteMessages,allowTeamMentions:s.msgsAllowTeamMentions,allowChannelMentions:s.msgsAllowChannelMentions},funSettings:{allowGiphy:s.fsAllowGiphy,allowStickersAndMemes:s.fsAllowStickersAndMemes,allowCustomMemes:s.fsAllowCustomMemes}});n(e+"/teams/"+s.id,i,"PATCH",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){null!=e.responseText&&""!=e.responseText&&null!=e.responseText&&"undefined"!=e.responseText||postResult({isSuccessful:!0})}))}(0,l);break;case"list":!function(t,s){!function(t,s,a){if(null==t.displayNameStartsWith||""==t.displayNameStartsWith){var i=e+"/groups"+"?$filter=resourceProvisioningOptions/Any(x:x eq 'Team')"}else{let s=t.displayNameStartsWith;if("string"!=typeof s)throw new Error("parameters[TeamDisplayNameStartsWith] is not of type string");let a="?$filter=startswith(displayName, '"+encodeURIComponent(s)+"')";i=e+"/groups"+a}n(i,null,"GET",(function(e){"function"==typeof a&&a(e)}))}(t,0,(function(e){postResult(e.value.map(e=>({id:e.id,displayName:e.displayName,resourceProvisioningOptions:e.resourceProvisioningOptions[0]})))}))}(p);break;case"archive":!function(t,s){!function(t,s,a){var i=JSON.stringify({shouldSetSpoSiteReadOnlyForMembers:!0});let o=s.id;if("string"!=typeof o)throw new Error("properties[TeamId] is not of type string");n(e+"/teams/"+encodeURIComponent(o)+"/archive",i,"POST",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){postResult({id:s.id,requestStatusUrl:s.requestStatusUrl,isSuccessful:s.isSuccessful})}))}(0,l);break;case"unarchive":!function(t,s){!function(t,s,a){let i=s.id;if("string"!=typeof i)throw new Error("properties[TeamId] is not of type string");n(e+"/teams/"+encodeURIComponent(i)+"/unarchive",null,"POST",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){o(t,s),postResult({id:s.id,requestStatusUrl:s.requestStatusUrl,isSuccessful:s.isSuccessful})}))}(p,l);break;case"addMember":!function(e,t){s(e,t,(function(s){t.userPrincipalName=s.userPrincipalName,t.userId=s.id,i(e,t,(function(e){null!=e.responseText&&""!=e.responseText&&null!=e.responseText&&"undefined"!=e.responseText||postResult({isSuccessful:!0})}))}))}(p,l);break;case"removeMember":!function(t,a){s(t,a,(function(t){a.userId=t.id,a.userPrincipalName=t.userPrincipalName,function(t,s,a){let i=s.id;if("string"!=typeof i)throw new Error("properties[TeamId] is not of type string");let o=s.userId;if("string"!=typeof o)throw new Error("properties[TeamUserId] is not of type string");n(e+"/groups/"+encodeURIComponent(i)+"/members/"+encodeURIComponent(o)+"/$ref",null,"DELETE",(function(e){"function"==typeof a&&a(e)}))}(0,a,(function(e){null!=e.responseText&&""!=e.responseText&&null!=e.responseText&&"undefined"!=e.responseText||postResult({isSuccessful:!0})}))}))}(p,l);break;case"clone":!function(t,s){!function(t,s,a){var i=JSON.stringify({displayName:s.displayName,description:s.description,mailNickname:s.mailNickname,partsToClone:"apps,tabs,settings,channels,members",visibility:"public"});let o=s.id;if("string"!=typeof o)throw new Error("properties[TeamId] is not of type string");n(e+"/teams/"+encodeURIComponent(o)+"/clone",i,"POST",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){postResult({id:s.id,requestStatusUrl:s.requestStatusUrl,isSuccessful:s.isSuccessful})}))}(0,l);break;case"addOwner":!function(e,t){s(e,t,(function(s){t.userId=s.id,t.userPrincipalName=s.userPrincipalName,a(e,t,(function(e){null!=e.responseText&&""!=e.responseText&&null!=e.responseText&&"undefined"!=e.responseText||postResult({isSuccessful:!0})}))}))}(p,l);break;case"myTeamsList":d=function(e){postResult(e.value.map(e=>({id:e.id,displayName:e.displayName,description:e.description,isArchived:e.isArchived})))},n(e+"/me/joinedTeams",null,"GET",(function(e){"function"==typeof d&&d(e)}));break;case"checkStatus":!function(t,s){!function(t,s,a){let i=t.archiveOperationUrl;if("string"!=typeof i)throw new Error("parameters[TeamArchiveOperationUrl] is not of type string");n(e+"/"+encodeURIComponent(i),null,"GET",(function(e){"function"==typeof a&&a(e)}))}(t,0,(function(e){postResult({operationId:e.id,operationType:e.operationType,creationDate:e.createdDateTime,archiveStatus:e.status,lastActionDate:e.lastActionDateTime,attemptsCount:e.attemptsCount,targetResourceId:e.targetResourceId,targetResourceLocation:e.targetResourceLocation,archiveError:e.error})}))}(p);break;default:throw new Error("The method "+r+" is not supported..")}var d}(d,c,m);break;case"channel":!function(t,s,a){null==a&&null==s||(null==a&&null!==s?s.isSuccessful=!0:a.isSuccessful=!0);switch(t){case"get":!function(t,s){s.isSuccessful=!0,function(t,s,a){let i=s.teamId;if("string"!=typeof i)throw new Error("properties[ChannelTeamId] is not of type string");let o=s.id;if("string"!=typeof o)throw new Error("properties[ChannelId] is not of type string");n(e+"/teams/"+encodeURIComponent(i)+"/channels/"+encodeURIComponent(o),null,"GET",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){s.id=e.id,s.displayName=e.displayName,s.description=e.description,s.email=e.email,s.weburl=e.webUrl,r(t,s)}))}(s,a);break;case"list":!function(t,s){!function(t,s,a){let i=s.teamId;if("string"!=typeof i)throw new Error("properties[ChannelTeamId] is not of type string");n(e+"/teams/"+encodeURIComponent(i)+"/channels?$select=id, displayname, description, email",null,"GET",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){postResult(e.value.map(e=>({id:e.id,displayName:e.displayName,description:e.description,email:e.email})))}))}(0,a);break;case"create":!function(t,s){!function(t,s,a){var i=JSON.stringify({displayName:s.displayName,description:s.description});let o=s.teamId;if("string"!=typeof o)throw new Error("properties[ChannelTeamId] is not of type string");n(e+"/teams/"+encodeURIComponent(o)+"/channels",i,"POST",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){s.id=e.id,s.displayName=e.displayName,s.description=e.description,s.email=e.email,s.weburl=e.webUrl,r(t,s)}))}(s,a);break;case"delete":!function(t,s){!function(t,s,a){let i=s.teamId;if("string"!=typeof i)throw new Error("properties[ChannelTeamId] is not of type string");let o=s.id;if("string"!=typeof o)throw new Error("properties[ChannelId] is not of type string");n(e+"/teams/"+encodeURIComponent(i)+"/channels/"+encodeURIComponent(o),null,"DELETE",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){postResult({isSuccessful:!0})}))}(0,a);break;case"update":!function(t,s){!function(t,s,a){var i=JSON.stringify({displayName:s.displayName,description:s.description});let o=s.teamId;if("string"!=typeof o)throw new Error("properties[ChannelTeamId] is not of type string");let r=s.id;if("string"!=typeof r)throw new Error("properties[ChannelId] is not of type string");n(e+"/teams/"+encodeURIComponent(o)+"/channels/"+encodeURIComponent(r),i,"PATCH",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){s.id=e.id,s.displayName=e.displayName,s.description=e.description,s.email=e.email,s.weburl=e.webUrl,postResult({isSuccessful:!0})}))}(0,a);break;case"sendMessage":!function(e,t){!function(e,t,s){var a="true"==t.messageIsImportant?"High":"Normal",i=JSON.stringify({subject:t.messageSubject,importance:a.toString(),body:{contentType:"html",content:t.messageBody}});let o=t.teamId;if("string"!=typeof o)throw new Error("properties[ChannelTeamId] is not of type string");let r=t.id;if("string"!=typeof r)throw new Error("properties[ChannelId] is not of type string");n("https://graph.microsoft.com/beta/teams/"+encodeURIComponent(o)+"/channels/"+encodeURIComponent(r)+"/messages",i,"POST",(function(e){"function"==typeof s&&s(e)}))}(0,t,(function(e){postResult({isSuccessful:!0,messageId:e.id})}))}(0,a);break;case"replyMessage":!function(e,t){!function(e,t,s){var a=JSON.stringify({body:{contentType:"html",content:t.messageBody}});let i=t.teamId;if("string"!=typeof i)throw new Error("properties[ChannelTeamId] is not of type string");let o=t.id;if("string"!=typeof o)throw new Error("properties[ChannelId] is not of type string");let r=t.messageId;if("string"!=typeof r)throw new Error("properties[ChannelMessageId] is not of type string");n("https://graph.microsoft.com/beta/teams/"+encodeURIComponent(i)+"/channels/"+encodeURIComponent(o)+"/messages/"+ +encodeURIComponent(r)+"/replies",a,"POST",(function(e){"function"==typeof s&&s(e)}))}(0,t,(function(e){postResult({isSuccessful:!0})}))}(0,a);break;default:throw new Error("The channel method "+t+" is not supported...")}}(d,c,m);break;case"tab":!function(t,s,a){null==a&&null==s||(null==a&&null!==s?s.isSuccessful=!0:a.isSuccessful=!0);switch(t){case"get":!function(t,s){!function(t,s,a){let i=s.teamId;if("string"!=typeof i)throw new Error("properties[TabTeamId] is not of type string");let o=s.channelId;if("string"!=typeof o)throw new Error("properties[TabChannelId] is not of type string");let r=s.id;if("string"!=typeof r)throw new Error("properties[TabId] is not of type string");n(e+"/teams/"+encodeURIComponent(i)+"/Channels/"+encodeURIComponent(o)+"/tabs/"+encodeURIComponent(r)+"?$expand=teamsApp",null,"GET",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){postResult({id:e.id,displayName:e.displayName,configEntityId:e.configuration.entityId,configContentUrl:e.configuration.contentUrl,configWebsiteUrl:e.configuration.websiteUrl,configRemoveUrl:e.configuration.removeUrl,teamsAppAppId:e.teamsApp.id,teamsAppExternalId:e.teamsApp.externalId,teamsAppAppDisplayName:e.teamsApp.displayName,teamsAppDistMethod:e.teamsApp.distributionMethod,sortOrderIndex:e.sortOrderIndex,weburl:e.webUrl})}))}(0,a);break;case"update":!function(t,s){!function(t,s,a){var i=JSON.stringify({displayName:s.displayName});let o=s.teamId;if("string"!=typeof o)throw new Error("properties[TabTeamId] is not of type string");let r=s.channelId;if("string"!=typeof r)throw new Error("properties[TabChannelId] is not of type string");let p=s.id;if("string"!=typeof p)throw new Error("properties[TabId] is not of type string");n(e+"/teams/"+encodeURIComponent(o)+"/Channels/"+encodeURIComponent(r)+"/tabs/"+encodeURIComponent(p),i,"PATCH",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){postResult({isSuccessful:!0})}))}(0,a);break;case"list":!function(t,s){!function(t,s,a){let i=s.teamId;if("string"!=typeof i)throw new Error("properties[TabTeamId] is not of type string");let o=s.channelId;if("string"!=typeof o)throw new Error("properties[TabChannelId] is not of type string");n(e+"/teams/"+encodeURIComponent(i)+"/channels/"+encodeURIComponent(o)+"/tabs?$select=id,displayName,webUrl",null,"GET",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){postResult(e.value.map(e=>({id:e.id,displayName:e.displayName,weburl:e.webUrl})))}))}(0,a);break;case"delete":!function(t,s){!function(t,s,a){let i=s.teamId;if("string"!=typeof i)throw new Error("properties[TabTeamId] is not of type string");let o=s.channelId;if("string"!=typeof o)throw new Error("properties[TabChannelId] is not of type string");let r=s.id;if("string"!=typeof r)throw new Error("properties[TabId] is not of type string");n(e+"/teams/"+encodeURIComponent(i)+"/Channels/"+encodeURIComponent(o)+"/tabs/"+encodeURIComponent(r),null,"DELETE",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){null!=e&&""!=e||postResult({isSuccessful:!0})}))}(0,a);break;case"createWordTab":case"createExcelTab":case"createPowerPointTab":case"createPdfTab":case"createOneNoteTab":case"createPlannerTab":case"createSharePointTab":case"createMsFormsTab":case"createStreamTab":case"createWebsiteTab":case"createWikiTab":case"createPowerBiTab":case"createDocumentLibraryTab":case"createCustomTab":p(t,s,a);break;default:throw new Error("The method "+t+" is not supported..")}}(d,c,m);break;case"app":!function(t,s,a){switch(t){case"list":!function(t,s){!function(t,s,a){let i=s.teamId;if("string"!=typeof i)throw new Error("properties[AppTeamId] is not of type string");n(e+"/teams/"+encodeURIComponent(i)+"/installedApps?$expand=teamsAppDefinition",null,"GET",(function(e){"function"==typeof a&&a(e)}))}(0,s,(function(e){postResult(e.value.map(e=>({id:e.id,displayName:e.teamsAppDefinition.displayName,version:e.teamsAppDefinition.version,teamsAppDefinitionId:e.teamsAppDefinition.id,teamsAppId:e.teamsAppDefinition.teamsAppId})))}))}(0,a);break;default:throw new Error("The method "+t+" is not supported..")}}(d,0,m);break;default:throw new Error("The object "+l+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
