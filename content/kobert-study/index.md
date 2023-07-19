---
emoji: ❤️
title: "[DeepLearning] KoBERT 개념공부하기"
date: '2022-03-02 16:17'
author: 쭈이
tags: KoBERT Python DeepLearning
categories: Python DeepLearning
---

## 😝 참고자료

- [https://velog.io/@seolini43/일상연애-주제의-한국어-대화-BERT로-이중-분류-모델-만들기파이썬Colab](https://velog.io/@seolini43/%EC%9D%BC%EC%83%81%EC%97%B0%EC%95%A0-%EC%A3%BC%EC%A0%9C%EC%9D%98-%ED%95%9C%EA%B5%AD%EC%96%B4-%EB%8C%80%ED%99%94-BERT%EB%A1%9C-%EC%9D%B4%EC%A4%91-%EB%B6%84%EB%A5%98-%EB%AA%A8%EB%8D%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0%ED%8C%8C%EC%9D%B4%EC%8D%ACColab)
- [https://velog.io/@seolini43/KOBERT로-다중-분류-모델-만들기-파이썬Colab](https://velog.io/@seolini43/KOBERT%EB%A1%9C-%EB%8B%A4%EC%A4%91-%EB%B6%84%EB%A5%98-%EB%AA%A8%EB%8D%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%ED%8C%8C%EC%9D%B4%EC%8D%ACColab)

---

## 🤔 BERT란?

BERT는 약 33억 개의 단어로 pretrain 되어 있는 기계번역 모델이다.

Bidirectional Encoder Representations from Transformers의 약자로, Transformers라는 기계번역 모델의 Encoder 구조를 갖는 모델이다.

**Transformers라는 모델의 일부분을 사용하고 성능을 업그레이드한 모델이다.**

- 외국에서 만들어져 한국어에 대해 정확도가 다소 떨어진다.
- BERT 모델을 한국어에도 잘 활용할 수 있도록 만들어진 모델 중 하나가 KoBERT 모델이다.

---

## 😁 **BERT 간단 정리**

### - **Transformer란?**
    
![Untitled](/Untitled.png)
    
위의 이미지는 Transformer 모델의 구조이다. 인코더 역할을 하는 왼쪽의 구조와, 디코더 역할을 하는 오른쪽의 구조를 가지고 있다.
    
BERT는 Transformer의 인코더 구조를 이용하기 때문에 **왼쪽 구조만 사용한다.**
    
Transformer는 n개의 인코딩 층을 가지고 있다. 하나의 인코더 층에는 서브층이 크게 2개로 나누어져 있다.
    
- 셀프 어텐션
    - 문장 내의 단어들의 유사도를 구한다.
- 피드 포워드 신경망
    
BERT의 인코더를 거치면 외적으로는 입력된 문장이 그대로 출력된 것으로 보이지만, 실제로는 문맥의 정보를 모두 가지고 있는 문장으로 출력된다.
    
### - **BERT의 입력 - Contextual Embedding**
    
![Untitled](/Untitled1.png)
    
BERT의 연산을 거친 후의 출력 임베딩은 문장의 모든 문맥이 반영된 임베딩이 된다.
    
각 단어 벡터들 하나하나 모두 해당하는 단어 벡터들을 참고(연산)한 벡터가 된다.
    
단어를 참고하도록 만드는 연산은 BERT 모델의 12개 층에서 `셀프 어텐션(self attention)` 을 통해 이루어진다.
    
### - **셀프 어텐션(self attention)이란?**
    
단어 그대로 어텐션을 자기 자신에게 수행하는 것이다.
    
`어텐션 함수`란 쿼리(Query)가 주어졌을 때, 주어진 쿼리와 여러 개의 key와의 유사도를 각각 구하고, 구한 유사도를 가중치로 설정하여 Value를 구한다. 이 Value들을 모두 가중합 하여 반환하는 함수이다.
    
- EX) 한 텍스트 문장이 쿼리로 입력 되면, 각 단어 벡터들과의 유사도를 계산한다. 계산된 유사도를 가중합 하여 반환된 값이 그 문장의 어텐션 값이다.
- EX)
        
    ![Untitled](/Untitled2.png)
        
    ‘student’라는 단어 벡터가 입력 되었다.
        
    각각 query, key, value의 가중치 행렬을 곱해주어 query, key, value 벡터를 얻어낸다.
        
    query 벡터, key 벡터, value 벡터를 얻어냈다면 모든 query 벡터는 모든 key 벡터에 대해 `attention score` 를 구하게 되고, 이를 이용하여 모든 value 벡터를 가중합하여 어텐션 값을 구한다.
        
    ![Untitled](/Untitled3.png)
        
    어텐션 함수 연산은 각 단어마다가 아닌 문장 전체에 대해 일괄적으로 행렬 연산을 할 수 있다.
        
### - **WordPiece란?**
    
어떤 모델이든 **단어 자체를 텍스트 형식으로 입력할 수 없다.**
    
따라서, 단어를 토큰으로 만든 뒤 정수 인코딩, 패딩 과정을 거친다.
    
BERT에서는 `WordPiece` 라는 서브워드 토크나이저를 사용한다.
    
- 기본적으로 자주 등장하는 단어를 단어 집합에 추가한다는 점에서 다른 도크나이저와 비슷하다.
- 빈도가 낮은 단어는 더 작은 단어인 서브워드로 분리되어 단어 집합에 추가된다는 특징을 가지고 있다.
    - EX)
            
        > ✔️ I am rewriting the posts
        **’I’, ‘am’, ‘rewriting’, ‘the’, ‘posts’**
            

            
        **일반적인 토크나이저의 토큰화**
            
        > ✔️ I am rewriting the posts
        **’I’, ‘am’, ‘##writ’, ‘##ing’, ‘the’, ‘post’, ‘##s’**
            
            
         **WordPiece의  토큰화**
            
        단어 집합에 단어가 존재하지 않으면 단어를 더 쪼개려고 하고, 서브워드로 쪼개졌다는 것을 ‘#’을 붙여 표시를 한다.
            
### - **Pre-training이란?**
    
BERT는 방대한 양의 데이터로 pretrain 되어 있다. 
    
![Untitled](/Untitled4.png)
    
BERT의 경우 `bidirectional transformer` 구조를 갖는다.
    
‘bidirectional’이란 양방향을 의미한다. 단어를 예측할 때, 모든 문맥의 단어를 참고하여 단어를 예측하게 된다.
    
이에 반해, OpenAIGPT는 이전 단어들로만 다음 단어를 예측하고, ELMo의 경우 정방향 LSTM, 양방향 LSTM 알고리즘을 이용하여 단어를 예측하는 방식을 사용한다.
    
BERT가 양방향으로 단어를 참고하여 다음 단어를 예측한다 했는데,
    
BERT는
    
**(1)Masked Language Model(MLM)**
**(2)Next Sentence Prediction(NSP)**
의 방식으로 훈련된다
    
- MLM
    - 입력으로 들어가는 단어 토큰의 일부분을 랜덤으로 마스킹 한뒤, 모델이 문맥을 통해 원래 단어를 예측하도록 하는 학습 모델이다.
    - 결과적으로 약 15%의 단어만 마스킹한다.
    - 문맥을 양방향으로 예측하는 것이 단방향으로 예측하는 것보다 훨씬 강력하다.
- NSP
    - 두 개의 문장을 주고 이 문장들이 이어지는 문장인지 맞추도록 학습시키는 것이다.
    - 문장마다 끝에 [SEP]이라는 토큰을 붙여 문장을 구분한다.
### - **Fine-tuning이란?**
    
BERT는 이미 방대한 단어들을 학습시킨 모델이다. 따라서 일부분의 데이터만 추가로 학습시켜주고, 자신의 목적 또는 용도에 따라 output layer를 추가해주면 된다.
    
이를 `Fine-tuning` 이라고 한다.
    
즉, 파라미터를 재조정하고 output layer를 추가함으로써 원하는 목적에 맞게 사용할 수 있고, 다양한 질의응답의 챗봇을 만들 수 있다.
    

---

## 🥳 KoBERT란?

SKTBrain에서 공개한 기계번역 모델이다.

- BERT 모델에서 한국어 데이터를 추가로 학습시킨 모델이다.
- 한국어 위키에서 5백만개의 문장과 54백만개의 단어를 학습시킨 모델이다.
- 한국어 데이터에 대해서도 높은 정확도를 낼 수 있다.

---

```toc

```