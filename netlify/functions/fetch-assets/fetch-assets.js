// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    // sample data to return
    const assets = [
        {
          Swingy_McSwingbridge: {
            id: '001',
            specs: {
              description: 'Two lane Dutch swing road bridge on route A5713, crossing River Frent',
              type: 'Bridge',
              location: '106 West North Street, E55 6HQ, FRUMPY/DILLIGENT/CHOWDER',
              year_built: 1987,
              length: 100,
              width: 20,
              height: 800,
              color: 'blue',
            },
            images: [ 'https://via.placeholder.com/350x150', 'https://via.placeholder.com/350x150', 'https://via.placeholder.com/350x150', ],
            documents: {
              risk_assessments: [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,],
              drawings_and_schematics: {
                site: [1998, 1999, 2000, 2001, 2002,],
                electrical: [1998, 1999, 2000, 2001, 2000,],
                mechanical: [1998, 1999, 2000, 2001, 2000,],
                hydraulic: [1998, 1999, 2000, 2001, 2000,],
              }
            },
            physical_plant: {
              mechanical: {},
              structural: {},
              electrical: {},
              hydraulic: {
                HPU_west_side: {
                  specs: {install_date: '2020-01-01',
                          install_type: 'new',
                        },
                },
                HPU_east_side: {
                  specs: {install_date: '2020-01-01',
                  install_type: 'new',
                },
                },
              },
            },
            environment_and_grounds: {},
          },
      },

      {
        Leaky_Old_Locks: {
          id: '002',
          specs: {
            description: 'manual and automated locks from pound 7 to pound 8 on River Stooge',
            type: 'Bridge',
            asset_ID: 'RS-014-001',
            location: 'Adjacent #5 Bellend Road, E21 9BJ, GRUMPY/ANNOYING/BUTTERFLY',
            year_built: 1804,
            max_vesel_length_metres: 14,
            max_vessel_width_metres: 3,
            lock_raise_metres: 2,
          },
          images: [ 'https://via.placeholder.com/350x150', 'https://via.placeholder.com/350x150', 'https://via.placeholder.com/350x150', ],
          documents: {
            risk_assessments: [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,],
            drawings_and_schematics: {
              site: [1998, 1999, 2000, 2001, 2002,],
              electrical: [1998, 1999, 2000, 2001, 2000,],
              mechanical: [1998, 1999, 2000, 2001, 2000,],
              hydraulic: [1998, 1999, 2000, 2001, 2000,],
            }
          },
          physical_plant: {
            mechanical: {},
            structural: {},
            electrical: {},
            hydraulic: {
              HPU_island_upstream: {
                specs: {install_date: '2020-01-01',
                        install_type: 'new',
                      },
              },
              HPU_island_downstream: {},
              HPU_west_bank_upstream: {},
              HPU_west_bank_downstream: {},
              gate_ram_west_bank_upstream: {},
              gate_ram_west_bank_downstream: {},
              gate_ram_island_upstream: {},
              gate_ram_island_downstream: {},
              sluice_ram_west_bank_upstream: {},
              sluice_ram_west_bank_downstream: {},
              sluice_ram_island_upstream: {},
              sluice_ram_island_downstream: {},
            },
          },
          environment_and_grounds: {},
        },
      }
    ]
    return { statusCode: 200, body: JSON.stringify(assets) }

  } catch (error) {

    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
