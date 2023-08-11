# Creating AI Applications using Langchain and Hugging Face

In today's rapidly evolving world, AI automation is becoming an integral part of our lives. Many of the tasks we encounter daily are now automated using AI technologies. In this tutorial, we will explore how to create Generative AI models using Langchain and Hugging Face APIs. Specifically, we will build applications using the GPT-2 model, an open-source language model developed by OpenAI.

## Getting Started

To begin, let's import the necessary libraries. We will be using Langchain and Hugging Face libraries to build our applications.

```python
# Installing required libraries
pip install langchain
pip install python-dotenv
```

Next, we need to log in to the Hugging Face platform to access their APIs. You can visit their [website](https://huggingface.co/) to create an account and generate a secret token, which you'll store in an environment variable file (`.env`).

## Translating English to SQL Model

In this example, we will build a Language Model (LLM) to translate English text into SQL commands. We will utilize the `mrm8488/t5-base-finetuned-wikiSQL` model from Hugging Face.

```python
from dotenv import load_dotenv
from langchain import HuggingFaceHub, LLMChain
from langchain.prompts import PromptTemplate

load_dotenv()

hub_llm = HuggingFaceHub(repo_id="mrm8488/t5-base-finetuned-wikiSQL")

prompt = PromptTemplate(
    input_variables=["question"],
    template="Translate English to SQL: {question}"
)

hub_chain = LLMChain(prompt=prompt, llm=hub_llm, verbose=True)
print(hub_chain.run("What is the average age of the respondents using a mobile device?"))
```

In this code, we utilize prompt templates to interact with the model. The template guides the user in providing input, making the process more intuitive.

**Note:** The query might take some time to process due to the use of GPT-2. For faster results, consider using GPT-3 or newer models.

## Building a Text Prompt Language Model

Now, let's build a Language Model that completes a given text prompt. We will also explore how to adjust the tone and length of the output. For this example, we will use the `gpt2` model from Hugging Face.

```python
from dotenv import load_dotenv
from langchain import HuggingFaceHub, LLMChain
from langchain.prompts import PromptTemplate

load_dotenv()

hub_llm = HuggingFaceHub(repo_id="gpt2")

prompt = PromptTemplate(
    input_variables=["profession"],
    template="You had one job! You are the {profession}, and you are not expected to behave like this."
)

hub_chain = LLMChain(prompt=prompt, llm=hub_llm, verbose=True, model_kwargs={'temperature': 0.8, 'max_length': 100})
print(hub_chain.run("CEO of this company"))
print(hub_chain.run("Politician"))
print(hub_chain.run("Customer service"))
print(hub_chain.run("Insurance Agent"))
```

In this code, we create a template that generates responses based on the given profession. We also adjust the temperature and maximum length of the output to control the tone and length of the generated text.

## Conclusion

In this tutorial, we explored how to create AI applications using Langchain and Hugging Face APIs. We built two examples: one for translating English to SQL using the `mrm8488/t5-base-finetuned-wikiSQL` model and another for generating text responses based on a given profession using the `gpt2` model. By utilizing these tools and pre-existing models, we can develop powerful and creative AI applications for various use cases.