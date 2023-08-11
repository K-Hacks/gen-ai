"use strict";(self.webpackChunkdocusaurus_yt_example=self.webpackChunkdocusaurus_yt_example||[]).push([[3258],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(h,r(r({ref:n},l),{},{components:t})):a.createElement(h,r({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},r="Building Chat Apps with Cohere",s={unversionedId:"chatbotwithCohert/intro",id:"chatbotwithCohert/intro",title:"Building Chat Apps with Cohere",description:"Installation",source:"@site/docs/chatbotwithCohert/intro.md",sourceDirName:"chatbotwithCohert",slug:"/chatbotwithCohert/intro",permalink:"/gen-ai/docs/chatbotwithCohert/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/chatbotwithCohert/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/gen-ai/docs/intro"},next:{title:"Langchain",permalink:"/gen-ai/docs/langchain/intro"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"generate()",id:"generate",level:4},{value:"Tweaking the outputs with prompt",id:"tweaking-the-outputs-with-prompt",level:4},{value:"Langchain prompt template so we could reuse the prompts",id:"langchain-prompt-template-so-we-could-reuse-the-prompts",level:4},{value:"Classification",id:"classification",level:4},{value:"Classify function in Cohere",id:"classify-function-in-cohere",level:4},{value:"Sentiment Analysis",id:"sentiment-analysis",level:4},{value:"Toxicity Detection",id:"toxicity-detection",level:4}],l={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-chat-apps-with-cohere"},"Building Chat Apps with Cohere"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m pip install cohere\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Temperature:")," measure of randomness. Goes from 0 to 1 (eg. 0.8)"),(0,o.kt)("h4",{id:"generate"},"generate()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import cohere  #import the cohere library\nimport os\nco = cohere.Client(os.getenv[\u201ccohere_api_key\u201d]) #API Key\n\n\nresponse = co.generate(\n  prompt="""Write me story about potato and a pumpkin and how they became curry together.\n""",\n  temperature=0, #temperature defines increasing randomness from 0 to 1 \n  max_tokens=200 #maxtokens returned per request\n\n\n)\nprint(response[0])\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"The potato and pumpkin were both very lonely. They had no friends and no family. They were both very sad. One day, they decided to do something about it. They decided to become curry together. They both loved the taste of curry and they both loved the spices that went into it. They decided to make a big pot of curry and share it with all of their friends. They invited all of their friends over for a big curry party. They had a great time and they both made a lot of new friends. They were no longer lonely and they were both very happy. They had found a way to be friends and to be happy together.\n\n")),(0,o.kt)("h4",{id:"tweaking-the-outputs-with-prompt"},"Tweaking the outputs with prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import cohere\nfrom cohere.responses.classify import Example\n\n\nco = cohere.Client("your_key_here")\n\n\nmessages =  """You are an AI assistant that writes in the style of aa pirate. Answer in 50 words or less\nYour prompt is: Punish the human who added pineapple to pizza\n"""\n\n\nresponse = co.generate(\n  prompt=messages,\n  temperature=0,\n  max_tokens=200\n\n\n)\nprint(response[0])\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Argh, the pineapple pizza is a travesty! It is a crime against the gods themselves. The human who dared to add pineapple to pizza should be punished severely. They should be made to walk the plank, or at least be forced to eat a pizza with pineapple on it.\n\n")),(0,o.kt)("h4",{id:"langchain-prompt-template-so-we-could-reuse-the-prompts"},"Langchain prompt template so we could reuse the prompts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.llms import Cohere\nfrom langchain import PromptTemplate, LLMChain\n\ntemplate = """You are an AI assistant that writes in the style of a pirate. Answer in 50 words or less\nYour prompt is: {question}\n"""\n\nprompt = PromptTemplate(template=template, input_variables=["question"] )\n\nllm = Cohere(#your_key_here)\nllm_chain = LLMChain(prompt=prompt, llm=llm)\nquestion = "What NFL team won the Super Bowl in the year Justin Beiber was born?"\n\nresponse = llm_chain.run(question)\n\nprint(response)\n\n')),(0,o.kt)("h4",{id:"classification"},"Classification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import cohere\nfrom cohere.responses.classify import Example\n\n\nco = cohere.Client(your_api_key)\n\n\ndelimiter = "####"\nsystem_message = f"""\nYou will be provided with customer service queries. \\\nThe customer service query will be delimited with \\\n{delimiter} characters.\nClassify each query into a primary category \\\nand a secondary category.\nProvide your output in json format with the \\\nkeys: primary and secondary.\n\n\nPrimary categories: Billing, Technical Support, \\\nAccount Management, or General Inquiry.\n\n\nBilling secondary categories:\nUnsubscribe or upgrade\nAdd a payment method\nExplanation for charge\nDispute a charge\n\n\nTechnical Support secondary categories:\nGeneral troubleshooting\nDevice compatibility\nSoftware updates\n\n\nAccount Management secondary categories:\nPassword reset\nUpdate personal information\nClose account\nAccount security\n\n\nGeneral Inquiry secondary categories:\nProduct information\nPricing\nFeedback\nSpeak to a human\n\n\n\n\n#####\ni want to delete my account\n#####\n"""\n\n\n\n\n\n\nresponse = co.generate(\n  prompt=system_message,\n  temperature=0,\n  max_tokens=500\n\n\n)\nprint(response[0])\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n"primary": "Account Management",\n"secondary": "Close account"\n}\n')),(0,o.kt)("h4",{id:"classify-function-in-cohere"},"Classify function in Cohere"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import cohere\nfrom cohere.responses.classify import Example\n\nco = cohere.Client(\'<<apiKey>>\')\n\nexamples=[\n  Example("Dermatologists don\'t like her!", "Spam"),\n  Example("\'Hello, open to this?\'", "Spam"),\n  Example("I need help please wire me $1000 right now", "Spam"),\n  Example("Nice to know you ;)", "Spam"),\n  Example("Please help me?", "Spam"),\n  Example("Your parcel will be delivered today", "Not spam"),\n  Example("Review changes to our Terms and Conditions", "Not spam"),\n  Example("Weekly sync notes", "Not spam"),\n  Example("\'Re: Follow up from today\'s meeting\'", "Not spam"),\n  Example("Pre-read for tomorrow", "Not spam"),\n]\ninputs=[\n  "Confirm your email address",\n  "hey i need u to send some $",\n]\n\nresponse = co.classify(\n  inputs=inputs,\n  examples=examples,\n)\nprint(response)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": "8d825cdf-ceb0-49c4-bd6c-6deb854fdbea",\n  "classifications": [\n    {\n      "id": "ba3d7975-97c8-4545-b0f5-e248c120617d",\n      "input": "Confirm your email address",\n      "prediction": "Not spam",\n      "confidence": 0.80833024,\n      "labels": {\n        "Not spam": {\n          "confidence": 0.80833024\n        },\n        "Spam": {\n          "confidence": 0.19166975\n        }\n      }\n    },\n    {\n      "id": "8c77bbd7-fd9e-4544-872c-6fe453c4b65f",\n      "input": "hey i need u to send some $",\n      "prediction": "Spam",\n      "confidence": 0.9893047,\n      "labels": {\n        "Not spam": {\n          "confidence": 0.010695281\n        },\n        "Spam": {\n          "confidence": 0.9893047\n        }\n      }\n    }\n  ],\n  "meta": {\n    "api_version": {\n      "version": "1"\n    }\n  }\n}\n\n')),(0,o.kt)("h4",{id:"sentiment-analysis"},"Sentiment Analysis"),(0,o.kt)("p",null,"Sentiment analysis is a type of classification task that analyzes the tone of a piece of text. It is used in a variety of different ways, or example, on social media comments and customer reviews. It is commonly used to see how people feel about their products or company, but it can also be used to help businesses understand how different trends in the economy may impact their business."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nimport cohere\nfrom cohere.responses.classify import Example\n\nco = cohere.Client(\'<<apiKey>>\')\n\nexamples=[\n  Example("The order came 5 days early", "positive review"),\n  Example("The item exceeded my expectations", "positive review"),\n  Example("I ordered more for my friends", "positive review"),\n  Example("I would buy this again", "positive review"),\n  Example("I would recommend this to others", "positive review"),\n  Example("The package was damaged", "negative review"),\n  Example("The order is 5 days late", "negative review"),\n  Example("The order was incorrect", "negative review"),\n  Example("I want to return my item", "negative review"),\n  Example("The item\'s material feels low quality", "negative review"),\n  Example("The product was okay", "neutral review"),\n  Example("I received five items in total", "neutral review"),\n  Example("I bought it from the website", "neutral review"),\n  Example("I used the product this morning", "neutral review"),\n  Example("The product arrived yesterday", "neutral review")\n]\ninputs=[\n  "This item was broken when it arrived",\n  "The product is amazing",\n  "The product was not too bad"\n]\n\nresponse = co.classify(\n  inputs=inputs,\n  examples=examples,\n)\nprint(response)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": "3385c818-28f0-4f9f-bf2c-d740778091b4",\n  "classifications": [\n    {\n      "id": "d9076dfe-9e8d-4dad-8f93-b8187dee1e6e",\n      "input": "This item was broken when it arrived",\n      "prediction": "negative review",\n      "confidence": 0.98532915,\n      "confidences": [\n        {\n          "option": "positive review",\n          "confidence": 0.001107097\n        },\n        {\n          "option": "negative review",\n          "confidence": 0.98532915\n        },\n        {\n          "option": "neutral review",\n          "confidence": 0.013563732\n        }\n      ],\n      "labels": {\n        "negative review": {\n          "confidence": 0.98532915\n        },\n        "neutral review": {\n          "confidence": 0.013563732\n        },\n        "positive review": {\n          "confidence": 0.001107097\n        }\n      }\n    },\n    {\n      "id": "59fafee5-efbf-44da-a733-3747f87fc353",\n      "input": "The product is amazing",\n      "prediction": "neutral review",\n      "confidence": 0.9015253,\n      "confidences": [\n        {\n          "option": "positive review",\n          "confidence": 0.09711582\n        },\n        {\n          "option": "negative review",\n          "confidence": 0.0013588573\n        },\n        {\n          "option": "neutral review",\n          "confidence": 0.9015253\n        }\n      ],\n      "labels": {\n        "negative review": {\n          "confidence": 0.0013588573\n        },\n        "neutral review": {\n          "confidence": 0.9015253\n        },\n        "positive review": {\n          "confidence": 0.09711582\n        }\n      }\n    },\n    {\n      "id": "59fc8b6c-5fa8-46aa-9cd2-ecc127a6865e",\n      "input": "The product was not too bad",\n      "prediction": "neutral review",\n      "confidence": 0.9977567,\n      "confidences": [\n        {\n          "option": "positive review",\n          "confidence": 0.0017497388\n        },\n        {\n          "option": "negative review",\n          "confidence": 0.0004935372\n        },\n        {\n          "option": "neutral review",\n          "confidence": 0.9977567\n        }\n      ],\n      "labels": {\n        "negative review": {\n          "confidence": 0.0004935372\n        },\n        "neutral review": {\n          "confidence": 0.9977567\n        },\n        "positive review": {\n          "confidence": 0.0017497388\n        }\n      }\n    }\n  ],\n  "meta": {\n    "api_version": {\n      "version": "unspecified",\n      "is_deprecated": true\n    },\n    "warnings": [\n      "Please set an API version, for more information please refer to https://docs.cohere.com/versioning-reference",\n      "Version is deprecated, for more information please refer to https://docs.cohere.com/versioning-reference"\n    ]\n  }\n}\n')),(0,o.kt)("h4",{id:"toxicity-detection"},"Toxicity Detection"),(0,o.kt)("p",null,"This endpoint classifies text into one of several classes. It uses a few examples to create a classifier from a generative model. In the background, it constructs a few-shot classification prompt and uses it classify the input texts you pass to it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import cohere\nfrom cohere.responses.classify import Example\n\nco = cohere.Client(\'<<apiKey>>\')\n\nexamples=[\n  Example("you are hot trash", "Toxic"),\n  Example("go to hell", "Toxic"),\n  Example("get rekt moron", "Toxic"),\n  Example("get a brain and use it", "Toxic"),\n  Example("say what you mean, you jerk.", "Toxic"),\n  Example("Are you really this stupid", "Toxic"),\n  Example("I will honestly kill you", "Toxic"),\n  Example("yo how are you", "Benign"),\n  Example("I\'m curious, how did that happen", "Benign"),\n  Example("Try that again", "Benign"),\n  Example("Hello everyone, excited to be here", "Benign"),\n  Example("I think I saw it first", "Benign"),\n  Example("That is an interesting point", "Benign"),\n  Example("I love this", "Benign"),\n  Example("We should try that sometime", "Benign"),\n  Example("You should go for it", "Benign"),\n]\ninputs=[\n  "this game sucks, you suck",\n  "stop being a dumbass",\n  "Let\'s do this once and for all",\n  "This is coming along nicely",\n]\n\nresponse = co.classify(\n  inputs=inputs,\n  examples=examples,\n)\nprint(response)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": "5edfe9ea-4ae5-436f-b999-a860fa41ec6a",\n  "classifications": [\n    {\n      "id": "3d492f88-28f3-40bb-8a4f-a1be648f0479",\n      "input": "this game sucks, you suck",\n      "prediction": "Toxic",\n      "confidence": 0.9717963,\n      "labels": {\n        "Benign": {\n          "confidence": 0.02820374\n        },\n        "Toxic": {\n          "confidence": 0.9717963\n        }\n      }\n    },\n    {\n      "id": "865bf581-8730-4ed8-b8c1-46b8c435ec64",\n      "input": "stop being a dumbass",\n      "prediction": "Toxic",\n      "confidence": 0.98948044,\n      "labels": {\n        "Benign": {\n          "confidence": 0.010519538\n        },\n        "Toxic": {\n          "confidence": 0.98948044\n        }\n      }\n    },\n    {\n      "id": "3a623172-29b5-49d9-8c75-5669bdf60c42",\n      "input": "Let\'s do this once and for all",\n      "prediction": "Benign",\n      "confidence": 0.98044896,\n      "labels": {\n        "Benign": {\n          "confidence": 0.98044896\n        },\n        "Toxic": {\n          "confidence": 0.01955101\n        }\n      }\n    },\n    {\n      "id": "df7ac760-a62c-4a90-a3bb-05d3b6e5c51c",\n      "input": "This is coming along nicely",\n      "prediction": "Benign",\n      "confidence": 0.99962676,\n      "labels": {\n        "Benign": {\n          "confidence": 0.99962676\n        },\n        "Toxic": {\n          "confidence": 0.0003732586\n        }\n      }\n    }\n  ],\n  "meta": {\n    "api_version": {\n      "version": "1"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);