cmake_minimum_required(VERSION 3.10)
project(meos_bls C)

set(CMAKE_C_STANDARD 11)

add_library(meos_bls STATIC
    src/bls.c
    src/bls.h
)

target_include_directories(meos_bls PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/src)
