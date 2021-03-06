---
emoji: πΆ
title: "[DeepLearning] PyTorchλ‘ μμνλ λ₯λ¬λ μλ¬Έ - Ch2"
date: '2022-03-24 17:32'
author: μ­μ΄
tags: Python Study DeepLearning PyTorch
categories: Study Python DeepLearning
---

## π₯° μ°Έκ³ 

- [https://sdc-james.gitbook.io/onebook/3./3.7.-modules/3.7.2.-namespace-scoping](https://sdc-james.gitbook.io/onebook/3./3.7.-modules/3.7.2.-namespace-scoping)
- [https://go-hard.tistory.com/11](https://go-hard.tistory.com/11)
- [https://gaussian37.github.io/dl-pytorch-deploy/](https://gaussian37.github.io/dl-pytorch-deploy/)
- [https://art28.github.io/blog/linear-algebra-1/](https://art28.github.io/blog/linear-algebra-1/)
- [https://eda-ai-lab.tistory.com/394](https://eda-ai-lab.tistory.com/394)
- [https://bskyvision.com/896](https://bskyvision.com/896)
- [https://wikidocs.net/60034](https://wikidocs.net/60034)

---

## π€ Ch2. νμ΄ν μΉ κΈ°μ΄(PyTorch Basic)

---

### π 01) νμ΄ν μΉ ν¨ν€μ§μ κΈ°λ³Έ κ΅¬μ±

1. **torch**
    
    λ©μΈ `λ€μμ€νμ΄μ€`μ΄λ€. 
    
    `λ€μμ€νμ΄μ€` λ, μμμ λ³μλ€μ΄ λͺ¨μ¬μλ κ³΅κ°μ΄λ€. μ μ²΄ νλ‘κ·Έλλ° κ³΅κ°μμ λ³μλ€μ μ΄λ¦μ΄ κ²ΉμΉ  μλ μμΌλ―λ‘, `λ€μμ€νμ΄μ€`λ₯Ό ν λΉνμ¬ λ³μ μ΄λ¦μ΄ ν΅μ©λ  μ μλ λ²μλ₯Ό μ ννλ€. (μμ : βλ λλ²¨λ²³β μμ΄λ¦° / βλͺ¨λΈβ μμ΄λ¦°. μ¬κΈ°μμ βλ λλ²¨λ²³βκ³Ό βλͺ¨λΈβμ΄ μΌμ’μ `λ€μμ€νμ΄μ€`λΌκ³  ν  μ μλ€.)
    
    νμ λ±μ λ€μν μν ν¨μκ° ν¬ν¨λμ΄μ Έ μμΌλ©° Numpyμ μ μ¬ν κ΅¬μ‘°λ₯Ό κ°μ§λ€.
    
2. **torch.autograd**
    
    μλ λ―ΈλΆμ μν ν¨μλ€μ΄ ν¬ν¨λμ΄ μλ€. μλ λ―ΈλΆμ on/offλ₯Ό μ μ΄νλ μ½νμ€νΈ λ§€λμ (enable_grad/no_grad)λ μμ²΄ λ―ΈλΆ κ°λ₯ ν¨μλ₯Ό μ μν  λ μ¬μ©νλ κΈ°λ° ν΄λμ€μΈ βFunctionβ λ±μ΄ ν¬ν¨λμ΄ μλ€.
    
3. **torch.nn**
    
    μ κ²½λ§μ κ΅¬μΆνκΈ° μν λ€μν λ°μ΄ν° κ΅¬μ‘°λ λ μ΄μ΄ λ±μ΄ μ μλμ΄ μλ€.
    
    RNN, LSTMκ³Ό κ°μ λ μ΄μ΄, ReLUμ κ°μ νμ±ν ν¨μ, MESLossμ κ°μ μμ€ ν¨μλ€μ΄ μ μ₯λμ΄ μλ€.
    
4. **torch.optim**
    
    `νλ₯ μ  κ²½μ¬ νκ°λ²`(Stochastic Gradient Descent, `SGD`)λ₯Ό μ€μ¬μΌλ‘ ν νλΌλ―Έν° μ΅μ ν μκ³ λ¦¬μ¦μ΄ κ΅¬νλμ΄ μλ€.
    
    ![Untitled](test.png)
    
    κ·Έλ¦Όκ³Ό κ°μ΄ `νλ₯ μ  κ²½μ¬ νκ°λ²`μ μ μ²΄ λ°μ΄ν°λ₯Ό μ¬μ©νλ κ²μ΄ μλλΌ, λλ€νκ² μΆμΆν μΌλΆ λ°μ΄ν°λ₯Ό μ¬μ©νλ€. λ°λΌμ νμ΅ μ€κ° κ³Όμ μμ κ²°κ³Όμ μ§ν­μ΄ ν¬κ³  λΆμμ νλ©°, μλκ° λ§€μ° λΉ λ₯Έ κ²μ΄ νΉμ§μ΄λ€.
    
5. **torch.utils.data**
    
    `SGD`μ λ°λ³΅ μ°μ°μ μ€νν  λ μ¬μ©νλ λ―Έλ λ°°μΉμ© μ νΈλ¦¬ν° ν¨μκ° ν¬ν¨λμ΄ μλ€.
    
6. **torch.onnx**
    
    `ONNX`(Open Neural Network Exchange)μ ν¬λ§·μΌλ‘ λͺ¨λΈμ export ν  λ(λΆλ¬ μ¬ λ) μ¬μ©νλ€. `ONNX`λ μλ‘ λ€λ₯Έ λ₯λ¬λ νλ μμν¬ κ°μ λͺ¨λΈμ κ³΅μ ν  λ μ¬μ©νλ ν¬λ§·μ΄λ€. νΉμ  νλ μμν¬μμ μμ±ν λͺ¨λΈμ λ€λ₯Έ νλ μμν¬μμ μ¬μ©ν  μ μκ² νλ λκ΅¬λ‘Β pytorch, caffe, CNTK, MXNet λ±μ μ§μνκ³  caffeλ MXNet κ°μ C++ κΈ°λ°μ νλ μμν¬λ₯Ό μ§μνκΈ° λλ¬Έμ λͺ¨λ°μΌ κΈ°κΈ°μ λ°°ν¬ν  μ μμ΄μ μμ© λ²μκ° λμ΄μ§λ€.
    

---

### π€ͺ 02) **νμ μ‘°μνκΈ°(Tensor Manipulation) 1**

1. **λ²‘ν°, νλ ¬ κ·Έλ¦¬κ³  νμ(Vector, Matrix and Tensor)**
   
    π **λ²‘ν°, νλ ¬ νμ κ·Έλ¦ΌμΌλ‘ μ΄ν΄νκΈ°**
    
    ![test](Untitled1.png)
    
    μ°¨μμ΄ μλ κ°μ `μ€μΉΌλΌ`, 1μ°¨μμΌλ‘ κ΅¬μ±λ κ°μ `λ²‘ν°`λΌκ³  ν©λλ€. 2μ°¨μμΌλ‘ κ΅¬μ±λ κ°μ `νλ ¬`, 3μ°¨μμΌλ‘ κ΅¬μ±λ κ°μ `νμ`λΌκ³  λΆλ¦λλ€.
    
    λ°μ΄ν° μ¬μ΄μΈμ€ λΆμΌ νμ μΌλ‘ `μ€μΉΌλΌ`, `λ²‘ν°`, `νλ ¬` μκ΄μμ΄ `1μ°¨μ νμ`, `2μ°¨μ νμ`, `3μ°¨μ νμ`μ κ°μ΄ λͺ¨λ `νμ`λΌκ³  λΆλ¦λλ€.

    ---
    
    π **PyTorch νμ λͺ¨μ κ·μΉ(PyTorch Tensor Shape Convention)**
    
    - `batch`λ?
        
        ![Untitled](Untitled2.png)
        
        `batch`μ μ¬μ μ  μλ―Έλ λ€μκ³Ό κ°λ€.
        
        > *(μΌκ΄μ μΌλ‘ μ²λ¦¬λλ) μ§λ¨, λ¬΄λ¦¬*
        > 
        > 
        > *ν νλΆ*
        > 
        
        μ¦, μ μ²΄ νΈλ μ΄λ λ°μ΄ν° μμ μ¬λ¬κ°μ μμ κ·Έλ£ΉμΌλ‘ λλμμ λ, νλμ μκ·Έλ£Ήμ ν΄λΉνλ κ²μ `batch`, μ΄ μκ·Έλ£Ήμ μνλ λ°μ΄ν° μλ₯Ό `batch size` λΌκ³  νλ€.
        
    
    μμΌλ‘ νλ ¬κ³Ό νμμ ν¬κΈ°λ₯Ό ννν  λ λ€μκ³Ό κ°μ λ°©λ²μΌλ‘ νκΈ°νλ€.
    
    ![Untitled](Untitled3.png)
    
    - **2μ°¨μ νμ(|t|) = (batch size, dim)**
    - **3μ°¨μ νμ(|t|) = (batch size, width, height)**
    - **NLP λΆμΌμμμ 3μ°¨μ νμ(batch size, λ¬Έμ₯κΈΈμ΄, λ¨μ΄ λ²‘ν°μ μ°¨μ) μμ **
        
        ```python
        [[λλ μ¬κ³Όλ₯Ό μ’μν΄], [λλ λ°λλλ₯Ό μ’μν΄], [λλ μ¬κ³Όλ₯Ό μ«μ΄ν΄], [λλ λ°λλλ₯Ό μ«μ΄ν΄]]
        ```
        
        4κ°μ λ¬Έμ₯μΌλ‘ κ΅¬μ±λ μ μ²΄ νλ ¨ λ°μ΄ν°κ° μλ€. μ»΄ν¨ν°μ μλ ₯νκΈ° μν΄μλ λͺ¨λ  λ¬Έμ₯μ λ¨μ΄λ³λ‘ λλ μ€λ€.
        
        ```python
        [['λλ', 'μ¬κ³Όλ₯Ό', 'μ’μν΄'],
        ['λλ', 'λ°λλλ₯Ό', 'μ’μν΄'],
        ['λλ', 'μ¬κ³Όλ₯Ό', 'μ«μ΄ν΄'],
        ['λλ', 'λ°λλλ₯Ό', 'μ«μ΄ν΄']]
        ```
        
        νλ ¨ λ°μ΄ν°λ 4*3μ ν¬κΈ°λ₯Ό κ°μ§λ 2μ°¨μ νμμ΄λ€. μ΄μ  κ° λ¨μ΄λ₯Ό 3μ°¨μμ λ²‘ν°λ‘ λ§λ€μ΄μ€λ€.(μ΄λ ν μκ³ λ¦¬μ¦μ λ°λΌ λ²‘ν°λ‘ λ§λ€μ΄μ£Όκ² μ§...?)
        
        ```python
        'λλ' = [0.1, 0.2, 0.9]
        'μ¬κ³Όλ₯Ό' = [0.3, 0.5, 0.1]
        'λ°λλλ₯Ό' = [0.3, 0.5, 0.2]
        'μ’μν΄' = [0.7, 0.6, 0.5]
        'μ«μ΄ν΄' = [0.5, 0.6, 0.7]
        ```
        
        μμ κΈ°μ€μ λ°λΌ νλ ¨λ°μ΄ν°λ₯Ό μ¬κ΅¬μ±νλ€.
        
        ```python
        [[[0.1, 0.2, 0.9], [0.3, 0.5, 0.1], [0.7, 0.6, 0.5]],
         [[0.1, 0.2, 0.9], [0.3, 0.5, 0.2], [0.7, 0.6, 0.5]],
         [[0.1, 0.2, 0.9], [0.3, 0.5, 0.1], [0.5, 0.6, 0.7]],
         [[0.1, 0.2, 0.9], [0.3, 0.5, 0.2], [0.5, 0.6, 0.7]]]
        ```
        
        μ΄μ  νλ ¨ λ°μ΄ν°λ 4(batch size)*3(λ¬Έμ₯μ κΈΈμ΄)*3(λ¨μ΄ λ²‘ν°μ μ°¨μ)μ ν¬κΈ°λ₯Ό κ°μ§λ 3μ°¨μ νμμ΄λ€.
        
        μ§κΈ νμ¬λ batch sizeκ° 4μ΄λ€. μ΄λ₯Ό 2λ‘ λ°κΎΈκ² λλ©΄,
        
    
        ```python
        ## μ²«λ²μ§Έ λ°°μΉ-(2*3*3)
        [[[0.1, 0.2, 0.9], [0.3, 0.5, 0.1], [0.7, 0.6, 0.5]],
         [[0.1, 0.2, 0.9], [0.3, 0.5, 0.2], [0.7, 0.6, 0.5]]]
    
        ## λλ²μ§Έ λ°°μΉ-(2*3*3)
        [[[0.1, 0.2, 0.9], [0.3, 0.5, 0.1], [0.5, 0.6, 0.7]],
        [[0.1, 0.2, 0.9], [0.3, 0.5, 0.2], [0.5, 0.6, 0.7]]]
        ```
    ---

    π **λνμ΄λ‘ νμ λ§λ€κΈ°(λ²‘ν°μ νλ ¬ λ§λ€κΈ°)**
    
    νλ ¬μ λ§λ€κΈ° κ°μ₯ μ’μ λΌμ΄λΈλ¬λ¦¬λ Numpyμ΄λ€. Numpyλ₯Ό importνμ¬ νμλ₯Ό λ§λ€μ΄μ£Όμ!
    
    ```python
    ## colab νκ²½μμ μ€μ΅μ μ§ννμ΅λλ€.
    
    import numpy as np
    ```
    
    - **π€ 1D with Numpy**
    
    Numpyλ‘ 1μ°¨μ νμμΈ λ²‘ν°λ₯Ό λ§λ€μ΄λ³΄μ. κ·Έλ₯ μ½κ² λ§ν΄μ 1μ°¨μ λ°°μ΄μ λ§λ€μ΄μ£Όλ©΄ λλ€!
    
    ```python
    t = np.array([0., 1., 2., 3., 4., 5., 6.])
    print(t)
    ```
    
    ```python
    #output
    [0. 1. 2. 3. 4. 5. 6.]
    ```
    
      - `t.ndim` : λ²‘ν°(t)μ μ°¨μμ μΆλ ₯νλ€
      - `t.shpae` : λ²‘ν°(t)μ ν¬κΈ°λ₯Ό μΆλ ₯νλ€.
          - μμ) (2, 3) : 2ν 3μ΄
    
    ```python
    print(t.ndim)
    print(t.shape)
    ```
    
    ```python
    #output
    1
    (7,)
    ```
    
    tλ 1μ°¨μ λ°°μ΄μ΄λ―λ‘ t.ndimμ νμ λ **1**μ΄, 1*7 νν(1ν 7μ΄)λ₯Ό κ°μ§κ³  μμΌλ―λ‘ **(7,)** μ΄ μΆλ ₯ λλ€.
    
    > (1 * k) νμμ νμ ν¬κΈ°λ (k, )λ‘ μΆλ ₯ λλ€.
    > 
    
    -  **π€ 2D with Numpy**
    
    Numpyλ‘ 2μ°¨μ νλ ¬μ λ§λ€μ΄λ³΄μ!
    
    ```python
    t = np.array([[1., 2., 3.], [4., 5., 6.], [7., 8., 9.], [10., 11., 12.]])
    print(t)
    ```
    
    ```python
    #output
    [[ 1.  2.  3.]
     [ 4.  5.  6.]
     [ 7.  8.  9.]
     [10. 11. 12.]]
    ```
    
    ```python
    print(t.ndim)
    print(t.shape)
    ```
    
    ```python
    #output
    2
    (4, 3)
    ```
    ---
    π **νμ΄ν μΉ νμ μ μΈνκΈ°(PyTorch Tensor Allocation)**
    - π€ **1D with PyTorch**

        
        ```python
        import torch
        ```
        
        ```python
        t = torch.FloatTensor([0., 1., 2., 3., 4., 5., 6.])
        
        print(t)
        print(t.dim())
        print(t.shape)
        print(t.size()) ## t.shapeμ λμΌνλ€
        ```
        
        ```python
        #output
        tensor([0., 1., 2., 3., 4., 5., 6.])
        1
        torch.Size([7])
        torch.Size([7])
        ```
        
    - π€ **2D with PyTorch**
        
        ```python
        t = torch.FloatTensor([[1., 2., 3.],
                               [4., 5., 6.],
                               [7., 8., 9.],
                               [10., 11., 12.]
                              ])
        print(t)
        print(t.dim())
        print(t.shape)
        print(t.size())
        ```
        
        ```python
        # output
        tensor([[ 1.,  2.,  3.],
                [ 4.,  5.,  6.],
                [ 7.,  8.,  9.],
                [10., 11., 12.]])
        2
        torch.Size([4, 3])
        torch.Size([4, 3])
        ```
    ---
    π **λΈλ‘λμΊμ€ν(Broadcasting)**
        
    νλ ¬ κ°μ μ°μ°μ ν  λ, νλ ¬μ ν¬κΈ°λ μμ£Ό μ€μνλ€.
        
    νλ ¬μ λ§μκ³Ό λΊμμ ν  λμλ λ νλ ¬μ ν¬κΈ°κ° κ°μμΌ νλ€. νλ ¬μ΄ κ³±μμ ν  λμλ ν νλ ¬μ λ§μ§λ§ μ°¨μκ³Ό λλ¨Έμ§ νλ ¬μ μ²« λ²μ§Έ μ°¨μμ΄ μΌμΉν΄μΌ νλ€.
        
    **νμ΄ν μΉμμλ μλμΌλ‘ ν¬κΈ°λ₯Ό λ§μΆ°μ μ°μ°μ μννκ² λ§λλ `λΈλ‘λμΊμ€ν` μ΄λΌλ κΈ°λ₯μ μ κ³΅νλ€!**
        
    `λΈλ‘λμΊμ€ν` μ μμ£Ό μ μ©νμ§λ§, μλμΌλ‘ μ€νλλ κΈ°λ₯μ΄λ―λ‘ μ¬μ©μ μμ₯μμ μμΉ μλ μ°μ°μ΄ μ€ν λ  μ μκΈ° λλ¬Έμ μ μν΄μΌνλ€.
        
    - λ νλ ¬μ΄ κ°μ ν¬κΈ°μΌ λ μ°μ°
            
        ```python
        m1 = torch.FloatTensor([[3, 3]])
        m2 = torch.FloatTensor([[2, 2]])
        print(m1 + m2)
        ```
            
        ```python
        # output
        tensor([[5., 5.]])
        ```
            
        m1, m2λ λ λ€ (1,2) μ¬μ΄μ¦μ΄λ€. 
            
    - λ νλ ¬μ΄ λ€λ₯Έ ν¬κΈ°μΌ λ μ°μ°(λ²‘ν° + μ€μΉΌλΌ)
            
        ```python
        m1 = torch.FloatTensor([[1, 2]]) # (1,2)
        m2 = torch.FloatTensor([3]) # (1,)
        print(m1 + m2)
        ```
            
        ```python
        # output
        tensor([[4., 5.]])
        ```
            
        m1μ (1, 2), m2λ(1, )μ μ¬μ΄μ¦λ₯Ό κ°μ§λ€. μλλΌλ©΄ νλ ¬ κ°μ μ°μ°μ΄ λΆκ°λ₯ν΄μΌ λ§μ§λ§ `λΈλ‘λμΊμ€ν` μ ν΅ν΄ κ³μ°νλ€.
            
        m2μ μ¬μ΄μ¦ (1, )λ₯Ό (1, 2)λ‘ λ³κ²½νμ¬ κ³μ°ν κ²μ λ³Ό μ μλ€.
            
    - λ νλ ¬μ΄ λ€λ₯Έ ν¬κΈ°μΌ λ μ°μ°(λ²‘ν° + λ²‘ν°)
            
        ```python
        m1 = torch.FloatTensor([[1, 2]]) # (1,2)
        m2 = torch.FloatTensor([[3], [4]]) # (2,1)
        print(m1 + m2)
        ```
            
        ```python
        # output
        tensor([4., 5.],
                [5., 6.]])
        ```
            
        m1μ (1, 2), m2λ(2, 1)μ μ¬μ΄μ¦λ₯Ό κ°μ§λ€.
            
        m1, m2μ μ¬μ΄μ¦λ₯Ό κ°κ° (2, 2)λ‘ λ³κ²½νμ¬ κ³μ°ν κ²μ λ³Ό μ μλ€.
    ---           
2. **μμ£Ό μ¬μ©λλ κΈ°λ₯λ€**
    1. **νλ ¬ κ³±μκ³Ό κ³±μμ μ°¨μ΄(Matrix Multiplication Vs. Multiplication)**
        - νλ ¬ κ³±μ(`m1.matmul(m2)`) : νλ ¬ κ° κ³±μ μ°μ°μ μννλ€.
        - μμ λ³ κ³±μ(`m1.mul(m2)`, `m1 * m2`) : λμΌν ν¬κΈ°μ νλ ¬μ΄ λμΌν μμΉμ μλ μμλΌλ¦¬ κ³±νλ μ°μ°μ μννλ€.
            
    2. **νκ· (Mean)**
            
        ```python
        ## λ²‘ν°λ₯Ό μΈμλ‘ μ£Όλ κ²½μ°
        t = torch.FloatTensor([[1, 2], [3, 4]]) # (2, 2)
        print(t.mean())
            
        ## μ°¨μμ μΈμλ‘ μ£Όλ κ²½μ°
        print(t.mean(dim=0))
        ```
            
        ```python
        ## λ²‘ν°λ₯Ό μΈμλ‘ μ£Όλ κ²½μ°
        tensor(2.5000)
            
        ## μ°¨μμ μΈμλ‘ μ£Όλ κ²½μ°
        tensor([2., 3.])
        ```
            
        dim = kλ, k μ°¨μμ μ κ±°νλ€λ μλ―Έμ΄λ€. dim = 0μ μ²« λ²μ§Έ μ°¨μμ μλ―Ένλ―λ‘, νλ ¬μμ μ²« λ²μ§Έ μ°¨μμΈ βνβμ΄ μ κ±° λλ€.
            
        λ°λΌμ, **(2, 2) β (1, 2)** μ΄λ€.
            
        - dim = 0
            - μ²« λ²μ§Έ μ°¨μμ μ κ±°νλ€.
            - νλ ¬μμλ μ²« λ²μ§Έ μ°¨μμΈ βνβμ΄ μ κ±° λλ€.
             - **μΈλ‘!**
        - dim = 1
            - λ λ²μ§Έ μ°¨μμ μ κ±°νλ€.
            - νλ ¬μμλ λ λ²μ§Έ μ°¨μμΈ βμ΄βμ΄ μ κ±° λλ€.
            - **κ°λ‘!**
        - dim = -1
            - λ§μ§λ§ μ°¨μμ μ κ±°νλ€.
            - νλ ¬μμλ λ§μ§λ§ μ°¨μμΈ βμ΄βμ΄ μ κ±° λλ€.
            - **κ°λ‘!**
                
    3. **λ§μ(Sum)**
            
        ```python
        t = torch.FloatTensor([[1, 2],
            				[3, 4]]) # μ΄ν΄λ₯Ό λκΈ° μν΄ λ³΄κΈ° μ’κ² νμ
            
        print(t.sum()) # λ¨μν μμ μ μ²΄μ λ§μμ μν
        print(t.sum(dim=0)) # μΈλ‘
        print(t.sum(dim=1)) # κ°λ‘
        print(t.sum(dim=-1)) # κ°λ‘
        ```
            
        ```python
        # output
            
        tensor(10.)
        tensor([4., 6.])
        tensor([3., 7.])
        tensor([3., 7.])
        ```
            
    4. **μ΅λ(Max)μ μκ·Έλ§₯μ€(ArgMax)**
        - Max(`t.max(dim=k)[0]`) : μμμ μ΅λ κ°μ λ¦¬ν΄νλ€.
        - ArgMax(`t.max(dim=k)[1]`) : μμμ μ΅λ κ°μ μΈλ±μ€λ₯Ό λ¦¬ν΄νλ€.
            
        ```python
        t = torch.FloatTensor([[1, 2], 
            					[3, 4]]) # μ΄ν΄λ₯Ό λκΈ° μν΄ λ³΄κΈ° μ’κ² νμ
        print(t.max())
        print(t.max(dim=0)[0]) # μΈλ‘ max
        print(t.max(dim=0)[1]) # μΈλ‘ argmax
        ```
            
        ```python
        # output
        tensor(4.)
        tensor([3., 4.]) # μΈλ‘ max
        tensor([1, 1]) # μΈλ‘ argmax
        ```
            
        - `t.max(dim=0)[0]` β max
                
            ![Untitled](Untitled.gif)
                
        - `t.max(dim=0)[1]` β argmax
                
            ![Untitled](Untitled_1.gif)
                
    

---

### π€€ 03) ****νμ μ‘°μνκΈ°(Tensor Manipulation) 2****

`view()`, `squeeze()`, `unsqueeze()`λ νμμ μμ μλ₯Ό κ·Έλλ‘ μ μ§νλ©΄μ λͺ¨μκ³Ό μ°¨μμ μ‘°μ νλ€.

1. **`λ·°`(`View`)**
    
    μμμ μλ₯Ό μ μ§νλ©΄μ νμμ ν¬κΈ°λ₯Ό λ³κ²½ν΄μ€λ€.
    
    ```python
    t = np.array([[[0, 1, 2],
                   [3, 4, 5]],
                  [[6, 7, 8],
                   [9, 10, 11]]])
    ft = torch.FloatTensor(t)
    print(ft)
    print(ft.shape)
    ```
    
    ```python
    # output
    tensor([[[ 0.,  1.,  2.],
             [ 3.,  4.,  5.]],
    
            [[ 6.,  7.,  8.],
             [ 9., 10., 11.]]])
    torch.Size([2, 2, 3]) #**(batch size, width=ν, height=dim=μ΄)**
    ```
    
    - `ft.shape` μ€ν κ³Όμ 
    
    ![Untitled](Untitled_2.gif)
    
    μ΄μ  ft νμλ₯Ό `view`λ₯Ό μ΄μ©νμ¬ shapeλ₯Ό λ³κ²½ν΄μ£Όμ.
    
    μ΄λ, `ft.view([1, 2, β¦, n])` μΌ λ, nμ°¨μμΌλ‘ λ³κ²½ν΄μ€λ€. λ§μ½ μμκ° `-1` μΌ κ²½μ°, λ―Έμ§μ `x` λ‘ λλ€κ³  μκ°νλ©΄ λλ€.(μλμμλ λ―Έμ§μ `x` λ₯Ό `?` λ‘ νννλ€.)
    
    ```python
    ## 3μ°¨μ νμ -> 2μ°¨μ νμ
    print(ft.view([-1, 3])) # ftλΌλ νμλ₯Ό (?, 3)μ ν¬κΈ°λ‘ λ³κ²½
    print(ft.view([-1, 3]).shape)
    
    ## 3μ°¨μ νμ -> 3μ°¨μ νμ
    print(ft.view([-1, 1, 3])) # ftλΌλ νμλ₯Ό (?, 1, 3)μ ν¬κΈ°λ‘ λ³κ²½
    print(ft.view([-1, 1, 3]).shape)
    ```
    
    ```python
    ## 3μ°¨μ νμ -> 2μ°¨μ νμ output
    tensor([[ 0.,  1.,  2.],
            [ 3.,  4.,  5.],
            [ 6.,  7.,  8.],
            [ 9., 10., 11.]])
    torch.Size([4, 3])
    
    ## 3μ°¨μ νμ -> 3μ°¨μ νμ output
    
    tensor([[[ 0.,  1.,  2.]],
    
            [[ 3.,  4.,  5.]],
    
            [[ 6.,  7.,  8.]],
    
            [[ 9., 10., 11.]]])
    torch.Size([4, 1, 3])
    ```
    
    > (2, 2, 3)μΈ νμμ ν¬κΈ°λ₯Ό λ³κ²½ν΄μ€ κ²°κ³Ό
    > 
    > 
    > β (4, 3)μ (4, 1, 3)μΌλ‘ λ³κ²½ν  μ μμλ€.
    > 
    > > π
    > > 
    > > 
    > > μ΄λ, **(2 * 2 * 3) = (4 * 3) = (4 * 1 * 3)** μ΄ μ±λ¦½νκΈ° λλ¬Έμ΄λ€.
    > > 
    
2. **`μ€ν΄μ¦`(`Squeeze`)**
    
    `μ€ν΄μ¦`λ `1` μ κ°μ κ°μ§λ ν΄λΉ μ°¨μμ μ κ±°νλ€.
    
    ```python
    ft = torch.FloatTensor([[0], [1], [2]])
    print(ft)
    print(ft.shape)
    ```
    
    ```python
    ## output
    tensor([[0.],
            [1.],
            [2.]])
    torch.Size([3, 1])
    ```
    
    ν΄λΉ νμλ (3, 1)μ ν¬κΈ°λ₯Ό κ°μ§λ€. λ λ²μ§Έ μ°¨μμ΄ `1` μ κ°μ κ°μ§λ―λ‘ `Squeeze` λ₯Ό μ¬μ©νλ©΄ (3,)μ ν¬κΈ°λ₯Ό κ°μ§λ νμλ‘ λ³κ²½λλ€.
    
    ```python
    print(ft.squeeze())
    print(ft.squeeze().shape)
    ```
    
    ```python
    ## output
    tensor([0., 1., 2.]) ## (3,) = (1, 3)
    torch.Size([3])
    ```
    
3. **`μΈμ€ν΄μ¦`(`Unsqueeze`)**
    
    `μΈμ€ν΄μ¦`λ `μ€ν΄μ¦`μ μ λ°λλ‘ νΉμ  μμΉμ `1`μ κ°μ κ°μ§λ μ°¨μμ μΆκ°νλ€.
    
    ```python
    ft = torch.Tensor([0, 1, 2])
    print(ft.shape)
    ```
    
    ```python
    ## output
    torch.Size([3]) # (3,) = (1, 3)
    ```
    
    ν΄λΉ νμλ (3,)μ μ¬μ΄μ¦λ₯Ό κ°μ§λ€. `μΈμ€ν΄μ¦`λ₯Ό μ¬μ©ν΄ μ²« λ²μ§Έ μ°¨μμ `1`μ κ°μ§λ μ°¨μμ μΆκ°ν΄λ³΄μ.
    
    ```python
    print(ft.unsqueeze(0)) # μΈλ±μ€κ° 0λΆν° μμνλ―λ‘ 0μ μ²«λ²μ§Έ μ°¨μμ μλ―Ένλ€.
    print(ft.unsqueeze(0).shape)
    ```
    
    ```python
    tensor([[0., 1., 2.]])
    torch.Size([1, 3])
    ```
    
4. **`νμ μΊμ€ν`(`Type Casting`)**
    
    `.long()`, `.float()`, `.bt()` κ³Ό κ°μ΄ νμμλ€ μμ μ½λλ₯Ό λΆμ΄λ©΄ μλμΌλ‘ μλ£νμ΄ λ³κ²½λλ€. μ΄λ₯Ό `νμ μΊμ€ν`μ΄λΌκ³  νλ€.
    
5. **`μ°κ²°νκΈ°`(`concatenate`)**
    
    `torch.cat([t1, t2], dim = k))` t1, t2 λ νμλ₯Ό kμΆμ λ°λΌ μ°κ²°ν΄μ€λ€.
    
    ```python
    x = torch.FloatTensor([[1, 2],
    											[3, 4]])
    
    y = torch.FloatTensor([[5, 6],
    											[7, 8]])
    
    print(torch.cat([x, y], dim=0)) ## μΈλ‘
    print(torch.cat([x, y], dim=1)) ## κ°λ‘
    ```
    
    ```python
    ## μΈλ‘ output
    tensor([[1., 2.],
            [3., 4.],
            [5., 6.],
            [7., 8.]])
    
    ## κ°λ‘ output
    tensor([[1., 2., 5., 6.],
            [3., 4., 7., 8.]])
    ```
    
6. `μ€ννΉ` (`Stacking`)
    
    `concatenate`μ λΉμ·ν μ­ν μ νλ€. `Stacking` μ λ¨μ΄ λ»κ³Ό λμΌνκ² νμλ₯Ό μμμ£Όλ μ­ν μ νλ€.
    
    ```python
    x = torch.FloatTensor([1, 4])
    y = torch.FloatTensor([2, 5])
    z = torch.FloatTensor([3, 6])
    
    print(torch.stack([x, y, z]))
    print(torch.stack([x, y, z], dim=1)) # κ°λ‘
    ```
    
    ```python
    ## output
    
    tensor([[1., 4.],
            [2., 5.],
            [3., 6.]])
    
    tensor([[1., 2., 3.],
            [4., 5., 6.]]) # κ°λ‘
    ```
    
7. **`ones_like`μ `zeros_like`**
    - `torch.ones_like(t)` : μλ ₯ νμ tμ ν¬κΈ°λ₯Ό λμΌνκ² νλ©΄μ κ°μ 1λ‘ μ±μ΄λ€.
    - `torch.zeros_like(t)` : μλ ₯ νμ tμ ν¬κΈ°λ₯Ό λμΌνκ² νλ©΄μ κ°μ 0λ‘ μ±μ΄λ€.

8. `λ?μ΄μ°κΈ° μ°μ°`(`In-place Operation`)
    
    μ°μ° λ€μ `_` λ₯Ό λΆμμ λ, κΈ°μ‘΄μ κ°μλ μ°μ° κ°μ λ?μ΄λ²λ¦¬λ μ°μ° λ°©λ²μ΄λ€.
    
    ```python
    x = torch.FloatTensor([[1, 2], [3, 4]])
    
    ## μΌλ° μ°μ°
    print(x.mul(2.)) # κ³±νκΈ° 2λ₯Ό μνν κ²°κ³Όλ₯Ό μΆλ ₯
    print(x) # κΈ°μ‘΄μ κ° μΆλ ₯
    
    ## λ?μ΄μ°κΈ° μ°μ°
    print(x.mul_(2.))  # κ³±νκΈ° 2λ₯Ό μνν κ²°κ³Όλ₯Ό λ³μ xμ κ°μ μ μ₯νλ©΄μ κ²°κ³Όλ₯Ό μΆλ ₯
    print(x) # κΈ°μ‘΄μ κ° μΆλ ₯
    ```
    
    ```python
    ## μΌλ° μ°μ° output
    tensor([[2., 4.],
            [6., 8.]])
    tensor([[1., 2.],
            [3., 4.]])
    
    ## λ?μ΄μ°κΈ° μ°μ° output
    tensor([[2., 4.],
            [6., 8.]])
    tensor([[2., 4.],
            [6., 8.]])
    ```
    

---

### π‘ 04) ****νμ΄μ¬ ν΄λμ€(class)****

λλ¬΄ μ΄λ €μ΄ ν΄λμ€π¦ κ²μμ λΉλμ΄ μ°¨κ·Όμ°¨κ·Ό κ³΅λΆν΄λ³΄μ!

- `ν΄λμ€` = μ§μ(κ²μ¬, λ§λ²μ¬, κΆμ λ±)
- `μμ±` = λ₯λ ₯μΉ(ν, λ―Όμ²© λ±)
- `λ©μλ` = μ€ν¬(κ³΅κ²©, ννΌ λ±)
- `μΈμ€ν΄μ€` = κ²μ μμ΄λ

![Untitled](Untitled4.png)

```python
class Warrior : ## ν΄λμ€ = μ§μ

  def __init__(self, power, agility): ## μμ± = λ₯λ ₯μΉ
    self.power = power
    self.agility = agility

  def attack(self) : ## λ©μλ = μ€ν¬
    print('λΉμ μ {0}μ νμΌλ‘ κ³΅κ²©νμ΅λλ€.'.format(self.power))

  def miss(self) : ## λ©μλ = μ€ν¬
    print('λΉμ μ λ―Όμ²©μ±μ΄ {0}μΈ νμ κ³΅κ²©μ μ€ν¨νμ΅λλ€.'.format(self.agility))

user1 = Warrior('50', '100') ## μΈμ€ν΄μ€ μμ± = κ²μ μμ΄λ μμ±
user2 = Warrior('10', '10')

user1.attack() ## μΈμ€ν΄μ€λ‘ λ©μλλ₯Ό νΈμΆ = user1, user2 κ°κ° μ€ν¬ μ¬μ©
user2.attack()
user2.miss()
```

```python
## output
λΉμ μ 50μ νμΌλ‘ κ³΅κ²©νμ΅λλ€.
λΉμ μ 10μ νμΌλ‘ κ³΅κ²©νμ΅λλ€.
λΉμ μ λ―Όμ²©μ±μ΄ 10μΈ νμ κ³΅κ²©μ μ€ν¨νμ΅λλ€.
```

- **`ν΄λμ€`λ₯Ό μ¬μ©ν  λ μ§μΌμΌ ν  κ·μΉ**
    - λ³΄ν΅ νμ΄μ¬μμλ `ν΄λμ€`μ μ΄λ¦μ **λλ¬Έμ**λ‘ μμνλ€.
    - `λ©μλ`μ μ²« λ²μ§Έ λ§€κ°λ³μλ λ°λμ `self`λ₯Ό μ§μ ν΄μΌ νλ€.
    - λλ¬΄ κΉκ² μκ°νμ§ λ§κ³ ... κ·Έλ₯ λ°μλ€μ΄μ...π₯²

```toc

```