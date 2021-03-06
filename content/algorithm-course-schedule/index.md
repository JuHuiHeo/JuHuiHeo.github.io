---
emoji: πΉ
title: "[Python] μΌμ  μ¬κ΅¬μ±"
date: '2022-03-17 14:00'
author: μ­μ΄
tags: leetcode Python Algorithm
categories: Algorithm Python
---

## π **μΆμ²**

- νμ΄μ¬ μκ³ λ¦¬μ¦ μΈν°λ·°

---

## π§ **λ¬Έμ **

[from, to]λ‘ κ΅¬μ±λ ν­κ³΅κΆ λͺ©λ‘μ μ΄μ©ν΄ JFKμμ μΆλ°νλ μ¬ν μΌμ μ κ΅¬μ±νλΌ. μ¬λ¬ μΌμ μ΄ μλ κ²½μ° μ¬μ  μ΄ν μμΌλ‘ λ°©λ¬Ένλ€.

## π€ **μμ **

![Untitled](Untitled_0.png)

## π **νμ΄1) DFSλ‘ μΌμ  κ·Έλν κ΅¬μ±**

### π **μμλ₯Ό ν΅ν νμ΄**

- `tickets` = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]

λ¨Όμ  μ£Όμ΄μ§ ticketsμ μμλ€μ κ·Έλν μμ λ£μ΄λ²λ¦¬μ!

```python
graph = collections.defaultdict(list)
        # κ·Έλν μμλλ‘ κ΅¬μ±
for a, b in sorted(tickets):
	graph[a].append(b)
```

- `defaltdict` : νμ΄μ¬μ λ΄μ₯ λͺ¨λμΈ `collections` μ `defaultdict` λ key κ°μ λ£μμ λ value κ°μ΄ μ‘΄μ¬νμ§ μλλΌλ, μμλ‘ value κ°μ λ£μ΄μ£Όλ **κΈ°λ³Έκ°μ μ§μ ν λμλλ¦¬**μ΄λ€.
    
    ```python
    from collections import defaultdict
    
    ## defaultdict(int)μΌ κ²½μ°
    d_dict = defaultdict(int)
    >>> d_dict["a"]
    0
    >>> d_dict
    defaultdict(<class 'int'>, {'a': 0})
    
    ## defaultdict(list)μΌ κ²½μ°
    d_dict = defaultdict(list)
    >>> d_dict["a"]
    []
    >>> d_dict
    defaultdict(<class 'int'>, {'a': []})
    ```
    

λ€μ μ½λλ‘ λμμμ, `graph` λΌλ μ΄λ¦μΌλ‘ λμλλ¦¬κ° μ μΈλ κ²μ λ³Ό μ μλ€. μ΄ λμλλ¦¬λ μΌλ°μ μΈ λμλλ¦¬κ° μλ `dafaltdict` λμλλ¦¬μ΄λ€. μ§κΈλΆν° `graph` μμ `tickets` λ₯Ό μ°¨κ³‘μ°¨κ³‘ λ£μ΄ μ€ κ²μ΄λ€.

```python
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"]
					,["ATL","JFK"],["ATL","SFO"]]

for a, b in sorted(tickets):
	graph[a].append(b)
```

λ¬Έμ μμ **μ€λ³΅λ μΌμ μΈ κ²½μ° μ΄ν μμΌλ‘ λ°©λ¬Έ** νλ€κ³  μ‘°κ±΄μ λ¬μμΌλ, `tickets`λ₯Ό sort ν΄μ£Όμ΄ μ΄ν μμΌλ‘ μ λ ¬ν΄μ€λ€.

```python
sorted(tickets) = [['ATL','JFK'],['ATL','SFO'],['JFK','ATL']
									,['JFK','SFO'],['SFO','ATL']]

for a, b in sorted(tickets):
	graph[a].append(b)
```

![Untitled](Untitled.gif)

---

κ·Έλν κ΅¬μ±μ΄ λλ¬λ€! `key` μλ ν°κ²μ μΆλ° μ§μ μ΄, `value` μλ ν°μΌμ λμ°© μ§μ μ΄ λ€μ΄κ° κ²μ λ³Ό μ μλ€. 

μ΄μ  μ¬κ· ν¨μλ₯Ό λλ¦¬λ©΄μ λλ§μκΈ°λ₯Ό ν΄μ€ κ²μ΄λ€. μ²« μΆλ° μ§μ μ βJFKβμ΄λ―λ‘ μ¬κ· ν¨μμ βJFKβλΆν° λ£λλ‘ νμ.

```python
def dfs(a):
	while graph[a]:
		dfs(graph[a].pop(0))

dfs('JFK')
```

![Untitled](Untitled_1.gif)

---

κ·ΈλΌ λ§μ§λ§μΌλ‘ κ²°κ³Όλ₯Ό λΌ μ°¨λ‘μ΄λ€! μ¬κ·ν¨μλ₯Ό νλμ© μ’λ£ν΄μ£Όλ©° `route` λ¦¬μ€νΈμ μΆκ°ν΄μ£Όμ! λ§μ§λ§μ λ€μ΄κ° κ°λΆν° pop(0) λκΈ° λλ¬Έμ λ§μ§λ§μλ μ¬λΌμ΄μ±μ ν΅ν΄ μ μ²΄λ₯Ό λ€μ§μ΄μ€λ€.

```python
route = []

def dfs(a):
	while graph[a]:
		dfs(graph[a].pop(0))
	route.append(a)

dfs('JFK')
route = route[::-1]
```

![Untitled](Untitled_2.gif)

---

### π **μ μ²΄ μ½λ**

```python
import collections
from typing import List

class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = collections.defaultdict(list)
        # κ·Έλν μμλλ‘ κ΅¬μ±
        for a, b in sorted(tickets):
            graph[a].append(b)

        route = []

        def dfs(a):
            # μ²« λ²μ§Έ κ°μ μ½μ΄ μ΄νμ λ°©λ¬Έ
            while graph[a]:
                dfs(graph[a].pop(0))
            route.append(a)

        dfs('JFK')
        # λ€μ λ€μ§μ΄ μ΄νμ κ²°κ³Όλ‘
        return route[::-1]
```

---

## π **νμ΄2) μ€ν μ°μ°μΌλ‘ ν μ°μ° μ΅μ ν μλ**

μμμλ `pop(0)` μ μ¬μ©νμλλ°, μ΄λ O(1)μΈ `pop()` κ³Όλ λ€λ₯΄κ² O(n)μ΄λ€. λ°λΌμ μ’ λ ν¨μ¨μ μΈ κ΅¬νμ μν΄ `pop()` μ μ¬μ©ν΄μ£Όλλ‘ νμ! κ·ΈλΌ μ μ΄μ κ·Έλνλ₯Ό μ­μμΌλ‘ κ΅¬μ±νλ©΄ κΉλνλ€!

```python
graph = collections.defaultdict(list)
        # κ·Έλν λ€μ§μ΄μ κ΅¬μ±
        for a, b in sorted(tickets, reverse=True):
            graph[a].append(b)
```

**reverse=True** νλλ‘ Big-Oλ₯Ό μ€μΌ μ μλ€λ...π?

### π **μ μ²΄ μ½λ**

```python
import collections
from typing import List

class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = collections.defaultdict(list)
        # κ·Έλν λ€μ§μ΄μ κ΅¬μ±
        for a, b in sorted(tickets, reverse=True):
            graph[a].append(b)

        route = []

        def dfs(a):
            # λ§μ§λ§ κ°μ μ½μ΄ μ΄νμ λ°©λ¬Έ
            while graph[a]:
                dfs(graph[a].pop())
            route.append(a)

        dfs('JFK')
        # λ€μ λ€μ§μ΄ μ΄νμ κ²°κ³Όλ‘
        return route[::-1]
```

```toc

```