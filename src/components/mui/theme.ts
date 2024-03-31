import {createTheme, styled} from '@mui/material/styles';

/**
 * MUI custom theme
 */

export const ComponentWrap = styled('div', {
  name: 'MuiComponentWrap',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
  position: 'absolute',
  top: 0,
  width: '100%',
  backgroundColor: 'white'
}));

export const Row = styled('div', {
  name: 'MuiRowBlock',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'row'
}));

export const Col = styled('div', {
  name: 'MuiColumnBlock',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const BtnWrap = styled('div', {
  name: 'MuiBtnWrap',
  slot: 'root'
})(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: theme.spacing(1.75, 3),
  columnGap: theme.spacing(1.5)
}));

export const FullBtnWrap = styled('div', {
  name: 'MuiFullBtnWrap',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const LargeBtnWrap = styled('div', {
  name: 'MuiLargeBtnWrap',
  slot: 'root'
})(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--white)',
  padding: theme.spacing(3.75, 3, 3)
}));

// 타이틀섹션 begin //
export const TitleSection = styled('div', {
  name: 'MuiTitleSection',
  slot: 'root'
})(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 24,
  padding: theme.spacing(3, 3, 3.75),
  marginBottom: theme.spacing(3.75)
}));

export const TitleHead = styled('div', {
  name: 'MuiTitleSection',
  slot: 'value'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  fontSize: 27,
  fontWeight: 700,
  letterSpacing: '-0.81px',
  lineHeight: '32px'
}));

export const TitleDesc = styled('div', {
  name: 'MuiTitleSection',
  slot: 'value'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  fontSize: 19,
  fontWeight: 400,
  letterSpacing: '-0.57px',
  lineHeight: '28px',
  color: 'var(--grey)'
}));

// 타이틀섹션 fin //

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4E61E1'
    },
    info: {
      main: '#9FEB36'
    },
    error: {
      main: '#ec1522'
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: 'Pretendard, sans-serif',
    htmlFontSize: 16,
    fontSize: 16,
    button: {
      height: 48,
      fontSize: 'inherit'
    }
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '15px',
          fontWeight: '400',
          lineHeight: '23px' /* 153.333% */,
          letterSpacing: '-0.6px',
          '&.MuiTypography-h1': {
            fontSize: '27px',
            lineHeight: '36px' /* 133.333% */,
            letterSpacing: '-0.81px'
          },
          '&.MuiTypography-h2': {
            fontSize: '23px',
            lineHeight: '30px' /* 130.435% */,
            letterSpacing: '-0.69px'
          },
          '&.MuiTypography-h3': {
            fontSize: '19px',
            lineHeight: '28px',
            letterSpacing: '-0.57px'
          },
          '&.MuiTypography-h4': {
            fontSize: '17px',
            lineHeight: '26px' /* 152.941% */,
            letterSpacing: '-0.51px'
          },
          '&.MuiTypography-h5': {
            fontSize: '14px',
            lineHeight: '20px' /* 142.857% */,
            letterSpacing: '-0.42px'
          },
          '&.MuiTypography-h6': {
            fontSize: '13px',
            lineHeight: '19px' /* 146.154% */,
            letterSpacing: '-0.39px'
          },
          '&.left-time': {
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '19px' /* 146.154% */,
            letterSpacing: '-0.39px',
            color: 'var(--qtxtgreen)',
            marginRight: '16px'
          },
          '&.info-version': {
            fontSize: '12px',
            lineHeight: '18px',
            letterSpacing: '-0.24px',
            color: 'var(--q-pblue)'
          },
          '&.step-text': {
            color: 'var(--gray-77)',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            letterSpacing: '-0.72px'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: 0
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          height: '100%',
          '&.flex': {
            '&.column': {
              flexDirection: 'column',
              '&.between': {
                justifyContent: 'space-between'
              }
            }
          }
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderTop: '1px solid var(--qblack)',
          '&.pb-table': {
            '.MuiTable-root': {
              '.MuiTableHead-root': {
                th: {
                  textAlign: 'center',
                  padding: '12px 4px',
                  backgroundColor: 'var(--b-ggrey)',
                  '&.MuiTableCell-head': {
                    fontWeight: '400'
                  }
                }
              },
              '.MuiTableBody-root': {
                td: {
                  textAlign: 'center',
                  fontSize: '14px'
                },
                '.MuiTableRow-root': {
                  '.MuiTableCell-root': {
                    padding: '12px 4px',
                    transition: 'ease all 0.3s',
                    '&:first-of-type': {
                      fontSize: '15px'
                    }
                  },
                  '&:hover': {
                    '.MuiTableCell-root': {
                      color: 'var(--qblue)',
                      transition: 'ease all 0.3s'
                    }
                  }
                }
              }
            }
          },
          '.MuiTable-root': {
            '.MuiTableHead-root': {
              backgroundColor: 'var(--b-ggrey)',
              borderBottom: '1px solid var(--softgrey)',
              '.MuiTableCell-head': {
                fontSize: '14px',
                letterSpacing: '-0.28px',
                lineHeight: '18px',
                padding: '11px 0'
              }
            },
            '.MuiTableRow-root': {
              '.MuiTableCell-root': {
                borderBottom: '1px solid var(--softgrey)',
                borderRight: '1px solid var(--softgrey)',
                fontSize: '14px',
                letterSpacing: '-0.28px',
                lineHeight: '18px',
                padding: '11px 20px',
                '&:last-of-type': {
                  borderRight: '0px solid var(--softgrey)'
                },
                '&:first-of-type': {
                  fontWeight: '600'
                }
              }
            }
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '&.market': {
            '.MuiTabs-scroller': {
              padding: '10px 24px 0',

              // 탭 스타일 인디케이터 조건 처리
              '&:has(.--orange.Mui-selected)': {
                '.MuiTabs-indicator': {
                  backgroundColor: 'var(--orange)'
                }
              },
              '&:has(.--neutral.Mui-selected)': {
                '.MuiTabs-indicator': {
                  backgroundColor: 'var(--neutral)'
                }
              },
              '&:has(.--seek-stable.Mui-selected)': {
                '.MuiTabs-indicator': {
                  backgroundColor: 'var(--seek-stable)'
                }
              },
              '&:has(.--stable.Mui-selected)': {
                '.MuiTabs-indicator': {
                  backgroundColor: 'var(--stable)'
                }
              },
              '&:has(.--invest.Mui-selected)': {
                '.MuiTabs-indicator': {
                  backgroundColor: 'var(--invest)'
                }
              },
              '&:has(.--agressive-invest.Mui-selected)': {
                '.MuiTabs-indicator': {
                  backgroundColor: 'var(--agressive-invest)'
                }
              },
              '.MuiTabs-flexContainer': {
                columnGap: '20px',
                '.MuiTab-root': {
                  padding: 0,
                  minWidth: 0,
                  height: '40px',
                  minHeight: '40px',
                  fontSize: '17px',
                  fontWeight: '600',
                  letterSpacing: '-0.51px',
                  lineHeight: '26px',
                  color: 'var(--qp-bgrey)',
                  '&.Mui-selected': {
                    color: 'var(--qblack)',
                    '&.--orange': {
                      color: 'var(--orange)'
                    },
                    '&.--neutral': {
                      color: 'var(--neutral)'
                    },
                    '&.--seek-stable': {
                      color: 'var(--seek-stable)'
                    }
                  }
                }
              },

              '.MuiTabs-indicator': {
                backgroundColor: 'var(--qblack)'
              }
            },
            '&.-scroll': {
              maxWidth: '100vw',
              '.MuiTabs-scroller': {
                overflowX: 'auto !important',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                '&::-webkit-scrollbar': {
                  height: '0px'
                }
              },
              '.MuiTabs-flexContainer': {
                columnGap: '20px',
                '.MuiTab-root': {
                  padding: 0,
                  minWidth: 0,
                  height: '40px',
                  minHeight: '40px',
                  fontSize: '17px',
                  fontWeight: '600',
                  letterSpacing: '-0.51px',
                  lineHeight: '26px',
                  scrollSnapAlign: 'start',
                  scrollSnapStop: 'always',
                  color: 'var(--qp-bgrey)',
                  scrollMarginLeft: '24px',
                  '&:first-of-type': {
                    scrollSnapAlign: 'center'
                  },
                  '&:last-of-type': {
                    scrollSnapAlign: 'end',
                    paddingRight: '24px'
                  },
                  '&.Mui-selected': {
                    color: 'var(--qblack)',
                    '&.--orange': {
                      color: 'var(--orange)'
                    },
                    '&.--neutral': {
                      color: 'var(--neutral)'
                    },
                    '&.--seek-stable': {
                      color: 'var(--seek-stable)'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    MuiStep: {
      styleOverrides: {
        root: {
          padding: 0,
          '.MuiStepConnector-alternativeLabel': {
            left: 'calc(-50% + 13px)',
            right: 'calc(50% + 13px)',
            top: '25px'
          },

          '.MuiStepLabel-alternativeLabel': {
            marginTop: '7px'
          }
        }
      }
    },

    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        fullWidth: true
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
          '&.connect-bank': {
            '.MuiFormControlLabel-root': {
              margin: 0,
              padding: '18px 24px',
              // 버튼영역
              '.MuiButtonBase-root': {
                padding: 0,
                marginRight: '8px'
              },
              // 라벨영역
              '.MuiFormControlLabel-label': {
                width: '100%',
                '> div': {
                  alignItem: 'center',
                  justifyContent: 'space-between',
                  '> div:first-of-type': {
                    columnGap: '8px',
                    alignItems: 'center'
                  },
                  '> div:last-of-type': {
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                  }
                }
              }
            }
          },
          '&.pb-select': {
            '>div': {
              '>label': {
                '&:nth-of-type(odd)': {
                  // backgroundColor: 'var(--boxgrey)'
                }
              }
            },
            '.MuiFormControlLabel-root': {
              margin: 0,
              padding: '24px',
              // 버튼영역
              '.MuiButtonBase-root': {
                padding: 0,
                marginRight: '8px'
              },
              // 라벨영역
              '.MuiFormControlLabel-label': {
                width: '100%',
                '> div': {
                  alignItems: 'center',
                  columnGap: '8px',
                  '> div:last-of-type': {
                    width: '100%',
                    '> div:last-of-type': {
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }
                  },
                  '> label': {}
                }
              }
            }
          },
          '&.select-account': {
            '>div': {
              '>label': {
                '&:nth-of-type(odd)': {
                  backgroundColor: 'var(--boxgrey)'
                }
              }
            },
            '.MuiFormControlLabel-root': {
              margin: 0,
              padding: '24px',
              // 버튼영역
              '.MuiButtonBase-root': {
                padding: 0,
                marginRight: '8px'
              },
              // 라벨영역
              '.MuiFormControlLabel-label': {
                width: '100%',
                '> div': {
                  alignItems: 'center',
                  columnGap: '8px',
                  '> div:last-of-type': {
                    width: '100%',
                    '> div:last-of-type': {
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }
                  },
                  '> label': {}
                }
              }
            }
          },
          '&.bank-account-input': {
            '.MuiInputBase-root': {
              alignItems: 'baseline',
              ':before, :after': {
                display: 'none'
              },
              span: {
                fontSize: '19px',
                textAlign: 'right'
              },
              input: {
                fontFamily: 'Satoshi',
                fontSize: '40px',
                fontWeight: '900',
                textAlign: 'right',
                paddingRight: '4px'
              }
            },
            label: {
              fontFamily: 'Satoshi',
              color: 'var(--softgrey)',
              fontSize: '40px',
              fontWeight: '900',
              width: '100%',
              textAlign: 'center',
              opacity: 1,
              transition: 'opacity ease 0.3s',
              '&.MuiInputLabel-shrink': {
                opacity: 0,
                transition: 'opacity ease 0.3s',
                transform: 'translate(0, 0) scale(1)',
                top: '16px',
                left: '2px'
              }
            }
          },
          '&.deposit-portfolio-textfield': {
            '.MuiInput-root': {
              alignItems: 'baseline',
              input: {
                textAlign: 'right',
                color: 'var(--grey)'
              },
              span: {
                color: 'var(--grey)'
              }
            },

            label: {
              '&.MuiInputLabel-shrink': {
                color: 'var(--qblack)',
                fontSize: '15px',
                fontWeight: '600',
                transform: 'scale(1)'
              }
            }
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 15,
          lineHeight: 1.53333,
          color: 'var(--grey)',
          '&.modal-title-label': {
            '&.Mui-focused': {
              fontSize: 'inherit',
              color: 'inherit'
            }
          },
          '&.Mui-focused': {
            fontSize: 13,
            color: 'var(--grey)'
          },
          '&.hide-menu': {
            overflow: 'hidden'
          },
          '&.Mui-error': {
            color: 'var(--qpink)'
          },
          '&[data-shrink="true"]': {
            '&.Mui-error': {
              color: 'var(--qp-bgrey)'
            }
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '4px',
          fontSize: '13px',
          lineHeight: '19px',
          letterSpacing: '-0.39px',
          '&.Mui-error': {
            color: 'var(--qpink)'
          }
        }
      }
    },

    // input
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 15,
          lineHeight: 1.53333,
          '&.MuiInput-underline': {
            '&:before': {
              borderColor: 'var(--b-ggrey)'
            },
            '&:after': {
              borderWidth: 1,
              borderColor: 'var(--qblue)'
            },
            '&.Mui-error': {
              '&:before': {
                borderBottomColor: 'var(--qpink)'
              }
            },
            'input[type="password"]': {}
          },
          '&.MuiInputBase-multiline': {
            backgroundColor: 'var(--boxgrey)',
            padding: '24px',
            borderRadius: '8px',
            '&::after': {
              borderBottom: '0 !important'
            },
            '&::before': {
              borderBottom: '0 !important'
            }
          }
        },
        input: {
          height: '1.2em',
          padding: '4px 0 10px'
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard'
      }
    },

    // button
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          '&.keypad': {
            display: 'flex',
            flexWrap: 'wrap',
            borderRadius: 0,
            border: '0',
            overflow: 'hidden',
            height: 0,
            flexShrink: 0,
            '&.isActive': {
              height: 'auto'
            },
            '.MuiButton-text': {
              fontFamily: 'Satoshi',
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--qblack)',
              width: 'calc( 100% / 3 )',
              height: 60,
              borderRadius: 0,
              background: 'var(--white)',
              border: 0
            }
          }
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.check-icon': {
            padding: 0
          },
          '&.MuiButton-text': {
            padding: 0,
            height: 'auto',
            backgroundColor: 'transparent',
            borderRadius: 0,
            '&.initial': {
              color: 'initial',
              width: 'initial'
            },
            '&.-border': {
              border: '1px solid var(--softgrey)'
            },
            '&.-radius': {
              borderRadius: '15px'
            },
            '&.under-line': {
              color: 'var(--grey)',
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: '23px' /* 153.333% */,
              letterSpacing: '-0.6px',
              borderBottom: '1px solid var(--grey)'
            },
            '&.btn-with-text': {
              flexDirection: 'column',
              rowGap: '8px',
              minWidth: '84px',
              h5: {
                color: 'var(--qblack)'
              }
            }
          },
          '&.MuiButton-outlined': {
            backgroundColor: 'var(--white)',
            '&.survey-btn': {
              borderRadius: '4px',
              border: '2px solid var(--neutral-gray-neutral-gray-150)',
              backgroundColor: 'var(--neutral-gray-neutral-gray-150)',
              color: 'var(--neutral-gray-neutral-gray-600)',
              fontSize: '20px',
              fontWeight: '600',
              '&.is-active': {
                border: '2px solid var(--q-pblue)',
                color: 'var(--q-pblue)',
                boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.10)'
              }
            }
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontSize: '1.266667rem',
          fontWeight: '600',
          letterSpacing: '-0.03em',
          padding: '10px 10px',
          height: 56,
          background: 'var(--q-pblue)',
          '&.Mui-disabled': {
            background: 'var(--qblue-10)',
            color: 'var(--p-blue-20)'
          },
          '&.grey-btn': {
            backgroundColor: 'var(--boxgrey)',
            color: 'var(--deepgrey)'
          },
          '&.MuiButton-sizeSmall': {
            height: '41px',
            fontSize: '15px',
            lineHeight: '23px',
            fontWeight: '400',
            letterSpacing: '-0.6px',
            color: 'var(--qblack)',
            background: 'var(--b-ggrey)',
            padding: '9px 16px',
            borderRadius: '6px',
            '&.bank-account-btn': {
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '-0.28px',
              lineHeight: '18px'
            }
          },
          '&.MuiButton-sizeLarge': {
            borderRadius: '15px',
            width: '100%',
            '&.default-btn': {
              backgroundColor: 'var(--boxgrey)',
              color: 'var(--deepgrey)'
            }
          },
          '&.MuiButton-fullWidth': {
            borderRadius: '0'
          },
          '&.MuiButton-sizeMedium': {
            width: '100%'
          }
        }
      }
    },
    MuiSwitch: {
      defaultProps: {},
      styleOverrides: {
        root: {
          width: 50,
          height: 29,
          padding: 0,
          marginTop: 6,
          marginBottom: 6,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(21px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                opacity: 1,
                border: 0,
                backgroundColor: 'var(--qblue)',
                borderRadius: 30
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5
              }
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#33cf4d',
              border: '6px solid #fff'
            },
            '&.Mui-disabled .MuiSwitch-thumb': {},
            '&.Mui-disabled + .MuiSwitch-track': {}
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 25,
            height: 25,
            boxShadow: 'initial'
          },
          '& .MuiSwitch-track': {
            borderRadius: 30,
            opacity: 1,
            backgroundColor: 'var(--softgrey)'
          }
        }
      }
    },
    MuiChip: {
      defaultProps: {
        clickable: false,
        variant: 'filled'
      },
      styleOverrides: {
        root: {
          fontSize: '15px',
          color: 'var(--qp-bgrey)',
          background: 'var(--b-ggrey)',
          '&.MuiChip-filledDefault': {
            '&.Mui-selected': {
              background: 'var(--qblack)',
              color: 'var(--qgreen)'
            }
          },
          '&.MuiChip-outlinedDefault': {
            padding: '4px 10px',
            backgroundColor: 'var(--white)',
            border: '1px solid var(--softgrey)',
            '.MuiChip-label': {
              padding: 0,
              fontSize: '12px',
              lineHeight: '18px' /* 128.571% */,
              letterSpacing: '-0.24px',
              height: 'auto'
            },
            '&.on-service': {
              border: '1px solid var(--qblue)',
              borderRadius: '4px',
              padding: '4px 6px',
              height: '27px',
              '.MuiChip-label': {
                padding: 0,
                fontSize: '13px',
                lineHeight: '19px',
                color: 'var(--qblue)',
                letterSpacing: '-0.39px'
              }
            },
            '&.off-service': {}
          },

          '.MuiChip-label': {
            padding: '0 14px',
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          '&.info-type': {
            padding: '4px 6px',
            borderRadius: '4px',
            height: '27px',
            '&.-outline': {
              '&.color-running': {
                border: '1px solid var(--qblue)',
                backgroundColor: 'var(--white)',
                height: '27px',
                padding: '0 6px',
                '.MuiChip-label': {
                  color: 'var(--qblue)',
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '1em',
                  letterSpacing: '-0.39px'
                }
              }
            },
            '&.color-invest': {
              backgroundColor: '#FFF2E9',
              '.MuiChip-label': {
                color: 'var(--orange)'
              }
            },
            '&.color-agressive': {
              backgroundColor: '#FFE9EA',
              '.MuiChip-label': {
                color: 'var(--red)'
              }
            },
            '&.color-neutral': {
              backgroundColor: '#FFFAE9',
              '.MuiChip-label': {
                color: 'var(--yellow)'
              }
            },
            '&.color-seek-stable': {
              backgroundColor: 'var(--qblue-10)',
              '.MuiChip-label': {
                color: 'var(--qblue)'
              }
            },
            '&.color-stable': {
              backgroundColor: '#E2FBF0',
              '.MuiChip-label': {
                color: 'var(--qtxtgreen)'
              }
            },
            '&.color-hot': {
              backgroundColor: 'var(--qtxtgreen)',
              height: '18px',
              padding: '0 4px',
              '.MuiChip-label': {
                color: 'var(--qblack)',
                fontSize: '10px',
                fontWeight: '700',
                lineHeight: '1em'
              }
            },
            '&.color-new': {
              backgroundColor: 'var(--qgreen)',
              height: '27px',
              padding: '0 6px',
              '.MuiChip-label': {
                color: 'var(--qblack)',
                fontSize: '13px',
                fontWeight: '400',
                lineHeight: '1em',
                letterSpacing: '-0.39px'
              }
            },
            '&.color-running': {
              backgroundColor: 'var(--qblue)',
              height: '27px',
              padding: '0 6px',
              '.MuiChip-label': {
                color: 'var(--white)',
                fontSize: '13px',
                fontWeight: '400',
                lineHeight: '1em',
                letterSpacing: '-0.39px'
              }
            },
            '&.color-blue': {
              backgroundColor: 'var(--qblue-10)',
              height: '27px',
              padding: '0 6px',
              '.MuiChip-label': {
                color: 'var(--qblue)',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '1em',
                letterSpacing: '-0.39px'
              }
            },
            '&.color-red': {
              backgroundColor: 'var(--red-10)',
              height: '27px',
              padding: '0 6px',
              '.MuiChip-label': {
                color: 'var(--red)',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '1em',
                letterSpacing: '-0.39px'
              }
            },

            '.MuiChip-label': {
              padding: 0,
              fontSize: '14px',
              lineHeight: '18px' /* 128.571% */,
              letterSpacing: '-0.42px',
              height: 'auto'
            },
            '&.active': {
              boxShadow: '0 0 1px 1px #0000001a'
            },
            '&.disabled': {
              filter: 'grayscale(1)'
            },
            '&.enable': {
              filter: 'opacity(0.4)'
            }
          }
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {},
      styleOverrides: {
        root: {
          fontSize: 16,
          width: 18,
          height: 18
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        size: 'medium'
      },
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          '&.market-list': {
            '.MuiListItemButton-root': {
              padding: 0,
              display: 'block',
              '.list': {
                rowGap: '4px',
                marginLeft: '24px',
                marginRight: '24px',
                padding: '20px 0',
                borderBottom: '1px solid var(--b-ggrey)',
                '> div': {
                  '&.forced--column': {
                    flexDirection: 'column',
                    alignItems: 'flex-start !important'
                  },
                  '&:first-of-type': {
                    alignItems: 'center',
                    columnGap: '10px'
                  },
                  '&:last-of-type': {
                    justifyContent: 'space-between',
                    '> div': {
                      rowGap: '2px',
                      '&:last-of-type': {
                        position: 'relative',
                        '> div': {
                          position: 'absolute',
                          right: 0
                        }
                      }
                    }
                  }
                }
              },
              '&:last-of-type': {
                '.list': {
                  borderBottom: '0px solid var(--grey-d9)'
                }
              }
            }
          }
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.line': {
            borderBottom: '1px solid var(--b-ggrey)',
            padding: 0,
            '.MuiListItemButton-root': {padding: '16px 23px'},
            '&:first-of-type': {
              borderTop: '1px solid var(--b-ggrey)'
            }
          },
          '&.asset-my-portfolio': {
            flexDirection: 'column',
            alignContent: 'flex-start',
            alignItems: 'stretch',
            paddingTop: '30px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingBottom: 0,
            gap: '8px',
            '> div': {
              justifyContent: 'space-between'
            },
            '> button': {
              marginBottom: '30px'
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'initial',
          marginRight: 8
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '16px 0',
          '&.agree-all': {
            backgroundColor: 'var(--boxgrey)',
            marginRight: 8,
            marginLeft: 8,
            marginBottom: 8,
            paddingLeft: 16
          }
        }
      }
    },
    MuiMenuItem: {
      defaultProps: {},
      styleOverrides: {
        root: {
          fontSize: 15,
          lineHeight: 1.53333,
          letterSpacing: '-0.6px',
          padding: '12px 24px',
          height: '23px',
          '&.Mui-selected': {
            backgroundColor: 'var(--qblue-10)',
            color: 'var(--q-pblue)'
          }
        }
      }
    },
    MuiBottomNavigation: {
      defaultProps: {
        showLabels: true
      },
      styleOverrides: {
        root: {
          padding: '12px 24px 11px',
          justifyContent: 'space-between',
          height: 'auto'
        }
      }
    },
    MuiBottomNavigationAction: {
      defaultProps: {},
      styleOverrides: {
        root: {
          minWidth: '60px',
          maxWidth: '48px',
          padding: '0 6px',
          rowGap: '6px',

          '.MuiBottomNavigationAction-label': {
            fontSize: '11px',
            fontWeight: '400',
            lineHeight: '11px' /* 11px */,
            letterSpacing: '-0.1px',
            color: 'var(--grey)'
          },
          '&.Mui-selected': {
            '.MuiBottomNavigationAction-label': {
              '&.Mui-selected': {
                fontWeight: '600',
                fontSize: '11px',
                color: 'var(--qblack)'
              }
            }
          }
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: '2px',
          backgroundColor: 'var(--gray-ef)',
          width: '100% !important',
          '.MuiLinearProgress-bar': {
            backgroundColor: 'var(--blue-01)'
          }
        }
      }
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          marginLeft: 'auto',
          marginRight: 'auto',
          '&.dots-stepper': {
            position: 'relative',
            padding: 0,
            justifyContent: 'center',
            '.MuiMobileStepper-dots': {
              position: 'absolute',
              columnGap: '12px',
              bottom: '34px',
              '.MuiMobileStepper-dot': {
                backgroundColor: 'var(--grey-d9)',
                height: '8px',
                width: '8px',
                margin: '0',
                '&.MuiMobileStepper-dotActive': {
                  backgroundColor: 'var(--qblack)'
                }
              }
            },
            '&.static-position': {
              '.MuiMobileStepper-dots': {
                position: 'static'
              }
            }
          }
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          '&.default-card': {
            boxShadow: 'initial',
            borderRadius: '15px',
            border: '1px solid var(--softgrey)',
            backgroundColor: 'var(--neutral-gray-neutral-gray-150)',
            overflow: 'initial'
          }
        }
      }
    },
    MuiModal: {
      styleOverrides: {
        root: {
          '.MuiBox-root': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'calc(100% - 48px)',
            maxWidth: '320px',
            backgroundColor: 'var(--white)',
            borderRadius: '8px'
          }
        }
      }
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          '&.survey-4radio-group': {
            justifyContent: 'space-between',
            '.MuiFormControlLabel-root': {
              diaplay: 'flex',
              flexDirection: 'column',
              marginRight: 0,
              marginLeft: 0,
              height: '80px',

              '.MuiButtonBase-root': {
                padding: 0,
                height: '56px'
              },
              '.MuiTypography-root ': {
                fontSize: '13px',
                letterSpacingL: '-0.78px',
                color: 'var(--gray-77)',
                position: 'absolute',
                width: '80px',
                textAlign: 'center',
                bottom: 0
              }
            }
          },
          '&.modal-radio-group': {
            '.MuiFormControlLabel-labelPlacementStart': {
              marginLeft: 0,
              marginRight: 0,
              padding: '12px 24px',
              justifyContent: 'space-between',
              backgroundColor: 'inherit',
              transition: 'background-color ease 0.1s',
              '.MuiTypography-root': {
                color: 'var(--grey)'
              },
              ':has(.Mui-checked)': {
                backgroundColor: 'var(--qblue-10)',
                transition: 'background-color ease 0.1s',
                '.MuiTypography-root': {
                  color: 'var(--q-pblue)'
                }
              }
            }
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          '&.MuiDrawer-paperAnchorBottom': {
            borderRadius: '20px 20px 0px 0px'
          }
        },
        root: {
          '&.home-drawer': {
            '.MuiPaper-root': {
              backgroundColor: 'var(--qblue)',
              borderRadius: '0px 0px 10px 30px'
            }
          }
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          '&.alram': {
            '.MuiBadge-dot': {
              transform: 'translate(2px, 1px)'
            }
          }
        }
      }
    }
  }
});
