---
emoji: 🎠
title: "[Python] max함수와 선택인자(key, default)"
date: '2023-03-31 17:07'
author: 쭈이
tags: Python max key default
categories: Python
---

## 😍 출처

- [https://think-tech.tistory.com/13](https://think-tech.tistory.com/13)
- [https://docs.python.org/ko/3/library/functions.html#max](https://docs.python.org/ko/3/library/functions.html#max)

---

## 😉 max 함수란?

파이썬의 내장 함수로, 가장 큰 항목이나 두 개 이상의 인자 중 가장 큰 것을 돌려주는 함수이다.

- 가장 큰 항목을 돌려주는 경우

```python
>> max([1, 2, 3, 4, 5])
5
```

- 두 개 이상의 인자 중 가장 큰 것을 돌려주는 경우

```python
>> max(3, 4, 5)
5
```

## 😘 max 함수의 선택적 키워드 전용 인자(key, default)

- `key` 인자

최대 값을 구하는 기준을 key 값에 설정할 수 있다.

```python
>> a = [(0, 50), (1, 30), (2, 40), (3, 10)]

# 그냥 max를 사용하면 첫 번째 인자가 기준
>> max(a)
(3, 10)

# lambda식을 사용하면 두 번째 인자가 기준
>> max(key = lambda x : x[1])
(0, 50)

# lambda식을 사용하여 첫 번째 인자를 기준
>> max(key = lambda x : x[0])
(3, 10)
```

위의 코드와 같이 기존의 max 함수는 배열의 첫 번째 인자가 기준이 된다.

이때 lambda 식을 key 값에 적용하면 다양한 순서의 인자를 기준으로 할 수 있다.

이외에도, 길이를 기준으로 최대 값을 구할 수도 있다.

```python
>> a = [[1, 2, 3], [1, 2, 3, 4, 5, 6, 7], [3], [7, 5, 3, 1, 2]]
>> max(a, key = len)
[1, 2, 3, 4, 5, 6, 7]
```

- `default` 인자

max함수에 빈 배열을 넣고 배열 중 가장 큰 값을 찾아 달라고 하면 오류가 발생한다. 이러한 오류의 예외처리를 위해 `default` 인자가 필요하다.

```python
## max 안에 빈 배열만 넣었을 경우
>> a = []
>> print(max(a))
Traceback (most recent call last):
ValueError: max() arg is an empty sequence

## default 인자를 넣었을 경우
>> print(max(a, default = 'error'))
error
```

```toc

```