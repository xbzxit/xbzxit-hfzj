# 介绍

<h1 align="center">Logging</h1>

<p align="center">日志log</p>

::: tip 提示
java中日志系统是一种不可或缺的跟踪调试工具，特别是在任何无人值守的后台程序以及那些没有跟踪调试环境的系统中有着广泛的应用。
长期以来，日志系统作为一种应用程序服务，对于跟踪调试、程序状体记录、崩溃数据恢复都有着非常现实的意义。这种服务通常以两种方式存在：

1.日志系统作为服务进程存在。Windows中的事件日志服务就属于这种类型，该类型的日志系统通常通过消息队列机制将所需要记录的日志由日志发送端发送该日志服务。
日志发送端和日志保存端通常不在同一进程中，日志的发送是异步过程。这种日志服务通常用于管理员监控各种系统服务的状态。

2.日志系统作为系统调用存在。Java世界中的日志系统和Unix环境下诸多守护进程所使用的日志系统都属于这种类型。
日志系统的代码作为系统调用被编译进日志发送端，日志系统的运行和业务代码的运行在同一进程空间。日志的发送多数属于同步过程。
这种日志服务由于能够同步反映出系统运行状态，通常用于调试跟踪和崩溃恢复。

:::
