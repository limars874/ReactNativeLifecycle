通过RN的Navigator组件来测试组件的生命周期

index是ios.index.js的生命周期log名称；

first是firstpage.js的生命周期log名称；

second是secondpage.js的生命周期log名称；

third是thirdpage.js的生命周期log名称；

log日志如下：

###开始启动

```
 index init
 index componentWillMount is here
 index render is here
 first init
 first componentWillMount is here
 first render is here
 first componentDidMount is here
 index componentDidMount is here
```
###点击 goto Secondpage
 
```
 first componentWillReceiveProps is here
 first shouldComponentUpdate is here
 first componentWillUpdate is here
 first render is here
 second init
 second componentWillMount is here
 second render is here
 first componentDidUpdate is here
 second componentDidMount is here
```
###点击 goto Thirdpage
 
```
 second componentWillReceiveProps is here
 second shouldComponentUpdate is here
 second componentWillUpdate is here
 second render is here
 third init
 third componentWillMount is here
 third render is here
 second componentDidUpdate is here
 third componentDidMount is here
```
###点击 back

```
 second componentWillReceiveProps is here
 second shouldComponentUpdate is here
 second componentWillUpdate is here
 second render is here
 third componentWillUnmount is here
 second componentDidUpdate is here
```
###再次点击 back
 
```	
 first componentWillReceiveProps is here
 first shouldComponentUpdate is here
 first componentWillUpdate is here
 first render is here
 second componentWillUnmount is here
 first componentDidUpdate is here
```
###点击 goto Thirdpage 

```   
 first componentWillReceiveProps is here
 first shouldComponentUpdate is here
 first componentWillUpdate is here
 first render is here
 third init
 third componentWillMount is here
 third render is here
 first componentDidUpdate is here
 third componentDidMount is here
```
###又点击 back

```	
 first componentWillReceiveProps is here
 first shouldComponentUpdate is here
 first componentWillUpdate is here
 first render is here
 third componentWillUnmount is here
 first componentDidUpdate is here
```