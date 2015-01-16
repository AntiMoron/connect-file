#include <iostream>
#include <string>
#include <cstdio>

class FileState{
public:
	FileState(const char* src){
		content = "";
		std::FILE* fp = nullptr;
		fp = std::fopen(src,"r");
		if(fp == null){
			return ;
		}else{
			while(std::feof(fp)){
				content += std::fgetc(fp);
			}
			std::fclose(fp);
		}
	}

	static void writeFile(const char* src,const std::string& str){
		std::FILE* fp = nullptr;
		fp = std::fopen(src,"w");
		if(fp == null){
			return ;
		}else{
			fputc(,fp);
			std::fclose(fp);
		}
	}
private:
	std::string content;
};

//connect src/con1.txt -s abcdefg  --> src/con1.txt
//connect src/con1.txt -f src/con2.txt  -->  src/con1.txt
int main(int argv, char* argc[]){
	if(argv < 4)
		return -1;
	if(std::string(argc[]) == );
	return 0;
}