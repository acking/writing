---
title: "使用sbt构建的用Scala编写的spark应用"
category: "Scala"
tags: [Scala, package]
---

	SBT：是一个通常在Scala工程中使用的比较新的构建工具。sbt预期的目录结构和Maven相似。在工程的根目录中，你要创建出一个叫做build.sbt的构建文件，源代码则应该放在src/main/scala中。sbt构建文件是用配置语言写成的，在这个文件中我们把赋值给特定的键，用来定义工程的构建。

sbt是一个代码编译工具，是scala界的mvn，可以编译scala，java等，需要java1.6以上。

build.sbt文件
	import AssemblyKeys._
	name := "Simple Project"
	version := "1.0"
	organization := "com.databricks"
	scalaVersion := "2.10.5"
	libraryDependencies ++= Seq(
		//Spark依赖
		"org.apache.spark" % "spark-core_2.10" % "1.2.0" % "provided",
		//第三方库
		"net.sf.jopt-simple" % "jopt-simple" % "4.3",
		"joda-time" % "joda-time" % "2.0"
	)

	//打开assembly插件宫恩感
	assemblySettings

	//配置assembly插件所使用的JAR
	jarName in assembly := "my-project-assembly"

	//一个用来把Scala本身排除在组合JAR包之外的特殊选项，因为Spark已经包含了Scala
	assemblyOption in assembly := (assemblyOption in assembly).value.capy(includeScala = false)

这个构建文件第一行从插件中引入了一些功能，这个插件用来支持创建项目的组合JAR包。要使用这个插件，需要在project／目录下加入一个小文件，来列出对插件的依赖。我们只需要创建出project/assembly.sbt文件，并在其中加入addSbtPlugin ("com.eed3si9n" % "sbt-assembly" % "0.11.2")。sbt-assembly的实际版本可能会因使用的sbt版本不同而变化。

定义好构建文件之后，就可以创建出一个完全组合打包的Spark应用JAR包




