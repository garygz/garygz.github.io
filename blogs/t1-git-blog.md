Benefits of using Version Control

Introduction to Version Control

11/2/2014

Version control also known as  a revision control or source control is a way to store
and track multiple versions of source code for programs, sites and documents.
It's a tool that lets multiple team participants to work simultaneously on the same project.
Version control tools allow to modify, review, store and back up multiple versions
of the same document, source file or a binary program.

Version Control systems track changes by creating multiple directories called branches.
The branch that holds the production version of the files (in case of the source code -
it's the source files that can be used to build the production version of the software)
is always called master. New branches are created in order to create new version of the
code which later can be merged with the master branch to release the new version of the
software/web application. Branches are cloned (copied) to each programmers local machine
in order to allow them to work on the files. Once the new code is ready, it has to be
committed to the main(remote) repository.


This is done in four steps:

1. Group the new source files into logical commit batches.
The good practice is find related files (e.g. all files that were modified
in order to fix a bug or introduce a new feature and pack them together)
2. Add these files to the commit batch by running
git add <file name>
3. Commit the batch with a meaningful message so that that an independent
team participant could understand the types of the modification that are committed.
4. Push the new committed changes to the remote repository from a local machine.

GitHub is a service that works seamlessly with GIT tools. GitHub provides a easy
way to create new repositories and share them with collaborators across the world
without the additional need administer the servers and security that would otherwise
be needed to offer this functionality.

Combination of Git with GitHub are a perfect solution to start a new collaborative project
with little effort and cost free.


